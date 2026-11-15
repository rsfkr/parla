#!/usr/bin/env node
/**
 * Parla — content and asset check.
 *
 * Runs with plain Node (no dependencies) locally and in CI:
 *   node scripts/validate-data.js
 *
 * It guards the things that break a lesson app quietly: duplicate keys,
 * missing fields, dialogue answers that point at the wrong option, broken
 * asset paths, and a service-worker version that drifted from index.html.
 */

"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
let failures = 0;

const fail = (message) => {
  failures++;
  console.error(`  ✗ ${message}`);
};
const section = (title) => console.log(`\n${title}`);
const read = (rel) => fs.readFileSync(path.join(root, rel), "utf8");
const exists = (rel) => fs.existsSync(path.join(root, rel));

/* ---------- content ---------- */

section("Content");

const sandbox = { window: {} };
vm.createContext(sandbox);
for (const file of ["js/data-it.js", "js/data-de.js"]) {
  vm.runInContext(read(file), sandbox, { filename: file });
}
const LANGUAGES = sandbox.window.LANGUAGES;

if (!LANGUAGES || !LANGUAGES.it || !LANGUAGES.de) {
  fail("missing window.LANGUAGES for Italian or German");
  finish();
}

const ids = new Map();
const register = (id, label) => {
  if (ids.has(id)) fail(`duplicate id "${id}" (${ids.get(id)} and ${label})`);
  else ids.set(id, label);
};

for (const langId of Object.keys(LANGUAGES)) {
  const lang = LANGUAGES[langId];
  const units = Array.isArray(lang.units) ? lang.units : [];
  const sets = Array.isArray(lang.vocab) ? lang.vocab : [];
  const dialogues = Array.isArray(lang.dialogues) ? lang.dialogues : [];

  if (!lang.name || !lang.englishName || !lang.locale || !lang.level) {
    fail(`${langId}: missing language metadata (name, englishName, locale, level)`);
  }
  if (!units.length) fail(`${langId}: no units`);
  if (!sets.length) fail(`${langId}: no vocabulary sets`);
  if (!dialogues.length) fail(`${langId}: no dialogues`);

  for (const unit of units) {
    const label = `${langId} unit ${unit.id}`;
    for (const field of ["id", "title", "local", "level", "icon", "tint", "blurb"]) {
      if (!unit[field]) fail(`${label}: missing ${field}`);
    }
    if (unit.level && !["A1", "A2", "B1"].includes(unit.level)) {
      fail(`${label}: level must be A1, A2, or B1, found "${unit.level}"`);
    }
    if (!Array.isArray(unit.phrases) || !unit.phrases.length) {
      fail(`${label}: no phrases`);
      continue;
    }
    register(unit.id, label);
    unit.phrases.forEach((phrase, index) => {
      const key = `${unit.id}-${index + 1}`;
      if (!phrase.target || !phrase.en) fail(`${label} phrase ${index + 1}: missing target or en`);
      if (typeof phrase.say !== "string") fail(`${label} phrase ${index + 1}: missing say`);
      register(key, `${label} phrase ${index + 1}`);
    });
  }

  for (const set of sets) {
    const label = `${langId} vocab ${set.id}`;
    for (const field of ["id", "title", "local", "icon", "tint", "blurb"]) {
      if (!set[field]) fail(`${label}: missing ${field}`);
    }
    if (!Array.isArray(set.words) || !set.words.length) {
      fail(`${label}: no words`);
      continue;
    }
    register(set.id, label);
    const terms = new Set();
    set.words.forEach((word, index) => {
      const key = `${set.id}-${index + 1}`;
      if (!word.term || !word.en) fail(`${label} word ${index + 1}: missing term or en`);
      if (typeof word.say !== "string" || !word.say) fail(`${label} word ${index + 1}: missing say`);
      if (word.note != null && typeof word.note !== "string") fail(`${label} word ${index + 1}: note must be a string`);
      if (word.term) {
        const term = word.term.toLowerCase();
        if (terms.has(term)) fail(`${label}: duplicate term "${word.term}"`);
        terms.add(term);
      }
      register(key, `${label} word ${index + 1}`);
    });
  }

  for (const dialogue of dialogues) {
    const label = `${langId} dialogue ${dialogue.id}`;
    for (const field of ["id", "unitId", "title", "local", "icon", "place", "lines"]) {
      if (!dialogue[field]) fail(`${label}: missing ${field}`);
    }
    register(dialogue.id, label);
    if (!units.some((unit) => unit.id === dialogue.unitId)) {
      fail(`${label}: unitId "${dialogue.unitId}" does not exist`);
    }
    if (!Array.isArray(dialogue.lines) || !dialogue.lines.length) {
      fail(`${label}: no lines`);
      continue;
    }
    dialogue.lines.forEach((line, index) => {
      if (line.you) {
        if (!line.prompt) fail(`${label} line ${index + 1}: missing prompt`);
        if (!Array.isArray(line.options) || line.options.length < 2) {
          fail(`${label} line ${index + 1}: needs at least two options`);
          return;
        }
        if (!(Number.isInteger(line.answer) && line.answer >= 0 && line.answer < line.options.length)) {
          fail(`${label} line ${index + 1}: answer index ${line.answer} is out of range`);
        }
        const seen = new Set();
        line.options.forEach((option, optionIndex) => {
          if (!option.text || !option.en) fail(`${label} line ${index + 1} option ${optionIndex + 1}: missing text or en`);
          if (option.text) {
            if (seen.has(option.text)) fail(`${label} line ${index + 1}: duplicate option "${option.text}"`);
            seen.add(option.text);
          }
        });
      } else if (!line.speaker || !line.text || !line.en) {
        fail(`${label} line ${index + 1}: missing speaker, text, or en`);
      }
    });
  }

  const phrases = units.reduce((sum, unit) => sum + unit.phrases.length, 0);
  const words = sets.reduce((sum, set) => sum + set.words.length, 0);
  const turns = dialogues.reduce((sum, dialogue) => sum + dialogue.lines.filter((line) => line.you).length, 0);
  console.log(
    `  ${langId}: ${units.length} units, ${phrases} phrases, ${sets.length} word sets, ${words} words, ${dialogues.length} dialogues, ${turns} role-play turns`
  );
}

/* ---------- index.html ---------- */

section("index.html");

const indexHtml = read("index.html");
const assetPaths = [...indexHtml.matchAll(/(?:href|src)="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((url) => !url.startsWith("data:") && !url.startsWith("http") && !url.startsWith("#"));

for (const url of assetPaths) {
  const rel = url.split("?")[0];
  if (!exists(rel)) fail(`index.html references missing file "${rel}"`);
}
if (!indexHtml.includes('rel="manifest"')) fail("index.html is missing the manifest link");
if (!indexHtml.includes('rel="apple-touch-icon"')) fail("index.html is missing the apple-touch-icon link");
if (!indexHtml.includes("navigator.serviceWorker.register")) fail("index.html does not register the service worker");

const indexVersions = new Set([...indexHtml.matchAll(/\?v=(\d+)/g)].map((match) => match[1]));
if (indexVersions.size !== 1) {
  fail(`index.html has mismatched asset versions: ${[...indexVersions].join(", ") || "none"}`);
}
const version = [...indexVersions][0] || "";

/* ---------- service worker ---------- */

section("Service worker");

const sw = read("sw.js");
const swVersion = (sw.match(/const VERSION = "(\d+)"/) || [])[1];
if (!swVersion) fail("sw.js: could not read VERSION");
else if (swVersion !== version) fail(`sw.js VERSION ${swVersion} does not match index.html ?v=${version}`);

const coreMatch = sw.match(/const CORE = \[([\s\S]*?)\];/);
if (!coreMatch) {
  fail("sw.js: could not read the CORE precache list");
} else {
  const entries = [...coreMatch[1].matchAll(/"([^"]+)"/g)].map((match) => match[1].replace(/^\.\//, ""));
  if (!entries.length) fail("sw.js: CORE is empty");
  for (const entry of entries) {
    const rel = entry.split("?")[0];
    if (!exists(rel)) fail(`sw.js precaches missing file "${rel}"`);
    if (entry.includes("?v=") && version && !entry.endsWith(`?v=${version}`)) {
      fail(`sw.js precaches "${entry}" but index.html is at ?v=${version}`);
    }
  }
  if (!entries.some((entry) => entry === "index.html" || entry === "")) {
    fail("sw.js CORE should include the app shell (index.html)");
  }
}

/* ---------- manifest ---------- */

section("Manifest");

let manifest = null;
try {
  manifest = JSON.parse(read("manifest.webmanifest"));
} catch (error) {
  fail(`manifest.webmanifest is not valid JSON: ${error.message}`);
}
if (manifest) {
  for (const field of ["name", "short_name", "start_url", "scope", "display", "icons"]) {
    if (!manifest[field]) fail(`manifest: missing ${field}`);
  }
  if (manifest.display && manifest.display !== "standalone") {
    console.log(`  note: display is "${manifest.display}" rather than "standalone"`);
  }
  for (const key of ["start_url", "scope"]) {
    if (typeof manifest[key] === "string" && manifest[key].startsWith("/")) {
      fail(`manifest ${key} should stay relative ("${manifest[key]}") so subpath hosting works`);
    }
  }
  for (const icon of manifest.icons || []) {
    const rel = String(icon.src || "").split("?")[0];
    if (!rel) fail("manifest: icon without src");
    else if (!exists(rel)) fail(`manifest icon missing: "${rel}"`);
    if (!icon.sizes || !icon.sizes.includes("x")) fail(`manifest icon ${rel}: missing sizes`);
  }
  if (!(manifest.icons || []).some((icon) => String(icon.purpose || "").includes("maskable"))) {
    fail("manifest: no maskable icon for Android");
  }
}

/* ---------- summary ---------- */

function finish() {
  if (failures) {
    console.error(`\n${failures} problem${failures === 1 ? "" : "s"} found.\n`);
    process.exit(1);
  }
  console.log("\nAll checks passed.\n");
}

finish();
