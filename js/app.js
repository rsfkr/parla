/* ==========================================================================
   Parla — application logic
   Vanilla JS, no build step. Data is static; progress lives in localStorage.
   ========================================================================== */
"use strict";

const STORE_KEY = "parla.v1";
const LANG_IDS = ["it", "de"];
const GOAL_OPTIONS = [3, 5, 8];
const RATES = [0.75, 0.9, 1];
const DEFAULTS = {
  goal: 5,
  rate: 0.9,
  autoPlay: true,
  accentStrict: false,
  showEn: true,
  theme: "system"
};

let state = null;
let session = null;
let sheet = null;
let pausedSheet = null;
let vocabQuery = "";
let toastTimer = null;
let voices = [];
const expandedPhrases = new Set();

/* ---------- tiny utilities ---------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

function esc(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function shuffle(list) {
  const arr = list.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function dayKey(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
const todayKey = () => dayKey(new Date());
const yesterdayKey = () => dayKey(new Date(Date.now() - 86400000));

function containsDiacritics(str) {
  return /[àèéìòùäöüß]/i.test(str);
}

/* ---------- data preparation ---------- */

function prepareData() {
  LANG_IDS.forEach((id) => {
    const lang = window.LANGUAGES[id];
    if (!lang) return;
    lang.units.forEach((unit) => {
      unit.lang = id;
      unit.phrases.forEach((p, i) => {
        p.id = `${unit.id}-${i + 1}`;
        p.unitId = unit.id;
        p.lang = id;
        p.say = p.say || "";
      });
    });
    (lang.vocab || []).forEach((set) => {
      set.lang = id;
      set.words.forEach((w, i) => {
        w.id = `${set.id}-${i + 1}`;
        w.unitId = set.id;
        w.lang = id;
        w.target = w.term;
        w.say = w.say || "";
        w.isWord = true;
      });
    });
    lang.dialogues.forEach((d) => {
      d.lang = id;
    });
  });
}

function getLang() {
  return window.LANGUAGES[state.lang];
}
function getUnits(langId = state.lang) {
  return window.LANGUAGES[langId].units;
}
function allPhrases(langId = state.lang) {
  return getUnits(langId).flatMap((u) => u.phrases);
}
function unitById(langId, unitId) {
  return getUnits(langId).find((u) => u.id === unitId);
}
function dialogueById(langId, id) {
  return window.LANGUAGES[langId].dialogues.find((d) => d.id === id);
}
function getVocab(langId = state.lang) {
  return window.LANGUAGES[langId].vocab || [];
}
function allWords(langId = state.lang) {
  return getVocab(langId).flatMap((set) => set.words);
}
function vocabById(langId, setId) {
  return getVocab(langId).find((set) => set.id === setId) || null;
}
function phraseUnit(p) {
  return unitById(p.lang, p.unitId);
}

/* ---------- state ---------- */

function freshStreak() {
  return { current: 0, best: 0, last: null };
}

function defaultState() {
  return {
    lang: "it",
    tab: "today",
    route: null,
    settings: { ...DEFAULTS },
    progress: {},
    activity: { it: {}, de: {} },
    stats: { it: { attempts: 0, correct: 0 }, de: { attempts: 0, correct: 0 } },
    xp: { it: 0, de: 0 },
    streak: { it: freshStreak(), de: freshStreak() },
    created: Date.now()
  };
}

function loadState() {
  state = defaultState();
  let raw = null;
  try {
    raw = localStorage.getItem(STORE_KEY);
  } catch (err) {
    raw = null;
  }
  if (raw) {
    try {
      const saved = JSON.parse(raw);
      if (saved && typeof saved === "object") {
        if (LANG_IDS.includes(saved.lang)) state.lang = saved.lang;
        state.settings = { ...DEFAULTS, ...(saved.settings || {}) };
        state.progress = saved.progress || {};
        if (saved.activity && saved.activity.it) state.activity = saved.activity;
        if (saved.stats) state.stats = { ...state.stats, ...saved.stats };
        if (saved.xp) state.xp = { ...state.xp, ...saved.xp };
        if (saved.streak && saved.streak.it) state.streak = { ...state.streak, ...saved.streak };
        state.created = saved.created || state.created;
      }
    } catch (err) {
      /* corrupted storage — start clean rather than break the app */
    }
  }
  if (!GOAL_OPTIONS.includes(state.settings.goal)) state.settings.goal = DEFAULTS.goal;
  if (!RATES.includes(state.settings.rate)) state.settings.rate = DEFAULTS.rate;
  state.tab = "today";
  state.route = null;
}

function saveState() {
  if (!state) return;
  try {
    localStorage.setItem(
      STORE_KEY,
      JSON.stringify({
        lang: state.lang,
        settings: state.settings,
        progress: state.progress,
        activity: state.activity,
        stats: state.stats,
        xp: state.xp,
        streak: state.streak,
        created: state.created
      })
    );
  } catch (err) {
    /* storage full or blocked — practice still works this session */
  }
}

/* ---------- progress & SRS ---------- */

const keyOf = (p) => `${p.lang}:${p.id}`;
const recordOf = (p) => state.progress[keyOf(p)];

function isNew(p) {
  return !recordOf(p);
}

function dueEntries(langId = state.lang) {
  const now = Date.now();
  return allPhrases(langId)
    .map((p) => ({ phrase: p, c: recordOf(p) }))
    .filter((x) => x.c && x.c.due <= now)
    .sort((a, b) => a.c.due - b.c.due);
}

function newEntries(langId = state.lang, limit = Infinity, unitId = null) {
  const list = [];
  const units = getUnits(langId);
  for (const unit of units) {
    if (unitId && unit.id !== unitId) continue;
    for (const p of unit.phrases) {
      if (!recordOf(p)) list.push({ phrase: p });
      if (list.length >= limit) return list;
    }
  }
  return list;
}

function learnStats(langId = state.lang) {
  const total = allPhrases(langId).length;
  let learned = 0;
  let mastered = 0;
  let learning = 0;
  let review = 0;
  let due = 0;
  const now = Date.now();
  allPhrases(langId).forEach((p) => {
    const c = recordOf(p);
    if (!c) return;
    learned++;
    if (c.state === "mastered") mastered++;
    else if (c.state === "learning") learning++;
    else review++;
    if (c.due <= now) due++;
  });
  return { total, learned, mastered, learning, review, due, fresh: total - learned };
}

function unitStats(unit) {
  let learned = 0;
  let due = 0;
  const now = Date.now();
  unit.phrases.forEach((p) => {
    const c = recordOf(p);
    if (c) {
      learned++;
      if (c.due <= now) due++;
    }
  });
  return { learned, total: unit.phrases.length, due };
}

function setStats(set) {
  let learned = 0;
  let due = 0;
  const now = Date.now();
  set.words.forEach((w) => {
    const c = recordOf(w);
    if (c) {
      learned++;
      if (c.due <= now) due++;
    }
  });
  return { learned, total: set.words.length, due };
}

function vocabTotals(langId = state.lang) {
  const sets = getVocab(langId);
  let learned = 0;
  let total = 0;
  let due = 0;
  let started = 0;
  sets.forEach((set) => {
    const s = setStats(set);
    learned += s.learned;
    total += s.total;
    due += s.due;
    if (s.learned > 0) started++;
  });
  return { learned, total, due, started, sets: sets.length };
}

function ensureToday(langId = state.lang) {
  if (!state.activity[langId]) state.activity[langId] = {};
  const k = todayKey();
  if (!state.activity[langId][k]) {
    state.activity[langId][k] = { cards: 0, new: 0, attempts: 0, correct: 0, seconds: 0 };
  }
  return state.activity[langId][k];
}

function todayLog(langId = state.lang) {
  const bucket = state.activity[langId] || {};
  return bucket[todayKey()] || { cards: 0, new: 0, attempts: 0, correct: 0, seconds: 0 };
}

function touchStreak(langId = state.lang) {
  const s = state.streak[langId];
  if (!s) return;
  const t = todayKey();
  if (s.last === t) return;
  s.current = s.last === yesterdayKey() ? (s.current || 0) + 1 : 1;
  s.last = t;
  s.best = Math.max(s.best || 0, s.current || 0);
}

function addXp(n, langId = state.lang) {
  state.xp[langId] = Math.max(0, (state.xp[langId] || 0) + n);
  saveState();
}

function addSeconds(sec, langId = state.lang) {
  if (!sec || sec <= 0) return;
  const log = ensureToday(langId);
  log.seconds = (log.seconds || 0) + Math.round(sec);
  saveState();
}

function logAnswer(phrase, correct) {
  const log = ensureToday(phrase.lang);
  log.attempts = (log.attempts || 0) + 1;
  if (correct) log.correct = (log.correct || 0) + 1;
  const stat = state.stats[phrase.lang] || { attempts: 0, correct: 0 };
  stat.attempts += 1;
  if (correct) stat.correct += 1;
  state.stats[phrase.lang] = stat;
  if (session && !session.finished) {
    session.attempts += 1;
    if (correct) session.correct += 1;
  }
}

/* grade: 'again' | 'good' | 'easy' */
function gradeCard(phrase, grade) {
  const now = Date.now();
  const key = keyOf(phrase);
  let c = state.progress[key];
  const wasNew = !c;
  if (!c) c = { ease: 2.5, interval: 0, reps: 0, due: 0, lapses: 0, state: "new", seen: 0, last: 0 };
  const first = c.reps === 0;
  c.seen = (c.seen || 0) + 1;
  c.last = now;
  if (grade === "again") {
    c.ease = Math.max(1.3, c.ease - 0.18);
    c.interval = 0;
    c.reps += 1;
    c.lapses = (c.lapses || 0) + 1;
    c.state = "learning";
    c.due = now + 8 * 60000;
  } else if (grade === "good") {
    c.interval = first ? 1 : Math.max(1, Math.round(c.interval * c.ease));
    c.ease = Math.min(3.0, c.ease + 0.02);
    c.reps += 1;
    c.state = c.interval >= 21 ? "mastered" : "review";
    c.due = now + c.interval * 86400000;
  } else {
    c.interval = first ? 3 : Math.max(3, Math.round(c.interval * c.ease * 1.35));
    c.ease = Math.min(3.2, c.ease + 0.12);
    c.reps += 1;
    c.state = c.interval >= 21 ? "mastered" : "review";
    c.due = now + c.interval * 86400000;
  }
  state.progress[key] = c;
  const log = ensureToday(phrase.lang);
  log.cards = (log.cards || 0) + 1;
  if (wasNew) log.new = (log.new || 0) + 1;
  touchStreak(phrase.lang);
  addXp(grade === "easy" ? 3 : grade === "good" ? 2 : 1, phrase.lang);
  if (session) {
    session.graded = session.graded || new Set();
    session.graded.add(phrase.id);
  }
  saveState();
}

/* ---------- speech ---------- */

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  try {
    voices = window.speechSynthesis.getVoices() || [];
  } catch (err) {
    voices = [];
  }
}

if ("speechSynthesis" in window) {
  loadVoices();
  try {
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
  } catch (err) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

function pickVoice(langId) {
  if (!voices.length) loadVoices();
  if (!voices.length) return null;
  const locale = window.LANGUAGES[langId].locale.toLowerCase();
  const prefix = locale.split("-")[0];
  const exact = voices.filter((v) => String(v.lang).toLowerCase().replace("_", "-") === locale);
  const loose = voices.filter((v) => String(v.lang).toLowerCase().startsWith(prefix));
  const pool = exact.length ? exact : loose;
  if (!pool.length) return null;
  const local = pool.find((v) => v.localService);
  return local || pool[0];
}

function speechText(text) {
  return String(text || "")
    .replace(/…/g, "")
    .replace(/\/[a-zA-Zà-ÿ]+/g, "")
    .replace(/\s*\/\s*/g, ", ")
    .replace(/\s+,/g, ",")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function speakText(text, langId = state.lang, options = {}) {
  if (!("speechSynthesis" in window) || !text) {
    showToast("Audio isn't available in this browser.");
    return;
  }
  const synth = window.speechSynthesis;
  const clean = speechText(text);
  if (!clean) return;
  try {
    synth.cancel();
  } catch (err) {
    /* ignore */
  }
  const utter = new SpeechSynthesisUtterance(clean);
  utter.lang = window.LANGUAGES[langId].locale;
  const voice = pickVoice(langId);
  if (voice) utter.voice = voice;
  utter.rate = options.rate || state.settings.rate;
  utter.pitch = 1;
  speechSynthesis.speak(utter);
}

function pulse(el) {
  if (!el) return;
  el.classList.remove("pulse");
  void el.offsetWidth;
  el.classList.add("pulse");
  setTimeout(() => el.classList.remove("pulse"), 600);
}

/* ---------- plan & session builders ---------- */

function planPreview(langId = state.lang) {
  const due = dueEntries(langId);
  const reviews = due.slice(0, 6);
  const fresh = newEntries(langId, state.settings.goal);
  let newCount = fresh.length;
  let total = newCount + reviews.length;
  let fallback = false;
  if (total === 0) {
    const learned = allPhrases(langId).filter((p) => recordOf(p));
    const pick = Math.min(6, learned.length);
    total = pick;
    fallback = pick > 0;
  }
  const minutes = Math.max(3, Math.round(newCount * 1.5 + reviews.length * 0.9 + (fallback ? 4 : 0)));
  return { newCount, reviews: reviews.length, due: due.length, total, minutes, fallback };
}

function makeSessionBase(kind, title, langId) {
  return {
    kind,
    title,
    lang: langId,
    entering: true,
    steps: [],
    index: 0,
    answers: {},
    attempts: 0,
    correct: 0,
    started: Date.now(),
    xpStart: state.xp[langId] || 0,
    newIds: [],
    graded: new Set(),
    spoken: new Set(),
    autoSpoken: {},
    timingAdded: false,
    finished: false,
    launch: null
  };
}

function buildDailySession(langId = state.lang) {
  const s = makeSessionBase("daily", "Daily session", langId);
  const due = dueEntries(langId).slice(0, 6);
  const fresh = newEntries(langId, state.settings.goal);
  const cards = [...fresh.map((x) => x.phrase), ...due.map((x) => x.phrase)];
  const learn = fresh.map((x) => x.phrase);
  let typeCards = learn.slice();

  if (!cards.length) {
    const learned = allPhrases(langId).filter((p) => recordOf(p));
    if (!learned.length) return null;
    const review = shuffle(learned).slice(0, 6);
    s.steps = review.map((p) => ({ kind: "listen", phrase: p }));
    s.launch = { type: "daily" };
    return s;
  }

  s.newIds = learn.map((p) => p.id);
  learn.forEach((p) => s.steps.push({ kind: "learn", phrase: p }));
  shuffle(cards).forEach((p) => s.steps.push({ kind: "listen", phrase: p }));
  shuffle(typeCards).forEach((p) => s.steps.push({ kind: "type", phrase: p }));
  s.launch = { type: "daily" };
  return s;
}

function buildUnitSession(unitId) {
  const langId = state.lang;
  const unit = unitById(langId, unitId);
  if (!unit) return null;
  const s = makeSessionBase("unit", unit.title, langId);
  const fresh = newEntries(langId, Math.max(3, state.settings.goal), unitId);
  const due = dueEntries(langId).filter((x) => x.phrase.unitId === unitId).slice(0, 6);
  const cards = [...fresh.map((x) => x.phrase), ...due.map((x) => x.phrase)];

  if (!cards.length) {
    const learned = unit.phrases.filter((p) => recordOf(p));
    if (!learned.length) return null;
    const review = shuffle(learned).slice(0, 6);
    s.steps = review.map((p) => ({ kind: "listen", phrase: p }));
    s.launch = { type: "unit", unitId };
    return s;
  }

  const learn = fresh.map((x) => x.phrase);
  s.newIds = learn.map((p) => p.id);
  learn.forEach((p) => s.steps.push({ kind: "learn", phrase: p }));
  shuffle(cards).forEach((p) => s.steps.push({ kind: "listen", phrase: p }));
  shuffle(learn).forEach((p) => s.steps.push({ kind: "type", phrase: p }));
  s.launch = { type: "unit", unitId };
  return s;
}

function quickPool(langId, count) {
  const due = dueEntries(langId).map((x) => x.phrase);
  const fresh = newEntries(langId, 8).map((x) => x.phrase);
  const learned = allPhrases(langId).filter((p) => recordOf(p));
  const picked = [];
  const seen = new Set();
  const push = (p) => {
    if (!p || seen.has(p.id) || picked.length >= count) return;
    seen.add(p.id);
    picked.push(p);
  };
  shuffle(fresh).forEach(push);
  due.forEach(push);
  shuffle(learned).forEach(push);
  return picked;
}

function buildQuickSession(mode, langId = state.lang) {
  const caps = { flashcards: 12, listening: 8, typing: 6, speaking: 6 };
  const card = quickPool(langId, caps[mode] || 8);
  if (!card.length) return null;
  const s = makeSessionBase(mode, {
    flashcards: "Flashcards",
    listening: "Listening",
    typing: "Build sentences",
    speaking: "Speaking"
  }[mode] || "Practice", langId);
  s.steps = card.map((p) => ({ kind: mode === "typing" ? "type" : mode === "speaking" ? "speak" : mode === "listening" ? "listen" : "flash", phrase: p }));
  s.newIds = card.filter((p) => isNew(p)).map((p) => p.id);
  s.launch = { type: "mode", mode };
  return s;
}

function buildVocabSession(setId = null, langId = state.lang) {
  const set = setId ? vocabById(langId, setId) : null;
  const pool = set ? set.words : allWords(langId);
  const now = Date.now();
  const fresh = pool.filter((w) => !recordOf(w)).slice(0, 6);
  const due = pool.filter((w) => {
    const c = recordOf(w);
    return c && c.due <= now;
  }).slice(0, 8);
  let cards = [...fresh, ...due];
  if (!cards.length) cards = shuffle(pool.filter((w) => recordOf(w))).slice(0, 10);
  if (!cards.length) return null;

  const s = makeSessionBase("vocab", set ? set.title : "Vocabulary", langId);
  s.newIds = fresh.map((w) => w.id);
  fresh.forEach((w) => s.steps.push({ kind: "learn", phrase: w }));
  shuffle(cards).forEach((w) => s.steps.push({ kind: "listen", phrase: w }));
  shuffle(fresh).forEach((w) => s.steps.push({ kind: "type", phrase: w }));
  s.launch = { type: "vocab", setId: setId || null };
  return s;
}

function buildDialogSession(dialogueId) {
  const dlg = dialogueById(state.lang, dialogueId);
  if (!dlg) return null;
  const s = makeSessionBase("dialog", dlg.title, state.lang);
  const userTurns = dlg.lines.filter((l) => l.you).length;
  s.dialog = {
    dlg,
    shown: 0,
    picked: {},
    wrongThisTurn: 0,
    firstTryCorrect: 0,
    turnsDone: 0,
    totalTurns: userTurns,
    choiceOrder: null,
    done: false,
    lastFeedback: null
  };
  s.launch = { type: "dialog", dialogueId };
  advanceDialog(s);
  return s;
}

function advanceDialog(s) {
  const d = s.dialog;
  while (d.shown < d.dlg.lines.length && !d.dlg.lines[d.shown].you) {
    d.shown += 1;
  }
}

function startSession(s) {
  if (!s) {
    showToast("That practice isn't ready yet.");
    return;
  }
  session = s;
  render();
  setTimeout(() => {
    if (session === s) s.entering = false;
  }, 340);
  setTimeout(autoSpeakCurrent, 320);
}

function closeSession(instant = false) {
  if (!session) return;
  if (!session.timingAdded) {
    addSeconds((Date.now() - session.started) / 1000, session.lang);
    session.timingAdded = true;
  }
  if (!instant && (session.finished || session.index > 0 || session.attempts > 0)) {
    showToast("Progress saved. Nice work.");
  }
  try {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  } catch (err) {
    /* ignore */
  }
  session = null;
  render();
}

function finishSession() {
  if (!session || session.finished) return;
  if (!session.timingAdded) {
    addSeconds((Date.now() - session.started) / 1000, session.lang);
    session.timingAdded = true;
  }
  session.finished = true;
  if (session.kind === "dialog") {
    const d = session.dialog;
    touchStreak(session.lang);
    addXp(5 + d.firstTryCorrect * 2, session.lang);
    saveState();
  } else {
    addXp(5, session.lang);
  }
  try {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  } catch (err) {
    /* ignore */
  }
  render();
}

function restartSession() {
  if (!session || !session.launch) return;
  const launch = session.launch;
  const lang = session.lang;
  session = null;
  let next = null;
  if (launch.type === "daily") next = buildDailySession(lang);
  else if (launch.type === "unit") next = buildUnitSession(launch.unitId);
  else if (launch.type === "mode") next = buildQuickSession(launch.mode, lang);
  else if (launch.type === "vocab") next = buildVocabSession(launch.setId, lang);
  else if (launch.type === "dialog") next = buildDialogSession(launch.dialogueId);
  startSession(next);
}

function autoSpeakCurrent() {
  if (!session || !state.settings.autoPlay || session.finished) return;
  if (session.kind === "dialog") {
    const d = session.dialog;
    const line = d.dlg.lines[d.shown - 1];
    if (line && !line.you && !session.spoken.has("dlg-" + (d.shown - 1))) {
      session.spoken.add("dlg-" + (d.shown - 1));
      speakText(line.text, session.lang);
    }
    return;
  }
  const step = session.steps[session.index];
  if (!step || !step.phrase) return;
  const key = "step-" + session.index;
  if (session.autoSpoken[key]) return;
  session.autoSpoken[key] = true;
  if (step.kind === "learn" || step.kind === "listen" || step.kind === "flash" || step.kind === "speak") {
    speakText(step.phrase.target, session.lang);
  }
}

/* ---------- answer checking ---------- */

function stripForCompare(str, strict) {
  let s = String(str || "").toLowerCase().trim();
  s = s.replace(/[.!?,;:"“”„«»]/g, "");
  s = s.replace(/\s+/g, " ");
  if (!strict) {
    s = s.replace(/['’`´]/g, "");
    if (s.normalize) {
      s = s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      s = s.replace(/ß/g, "ss");
    }
  }
  return s.trim();
}

function typeVariants(phrase) {
  const raw = [phrase.target, ...(phrase.alt || [])];
  const out = [];
  raw.forEach((variant) => {
    out.push(variant);
    if (variant.includes(" / ")) {
      variant.split(" / ").forEach((part) => out.push(part));
    }
    if (/\/[a-zà-ÿ]+/i.test(variant)) {
      out.push(variant.replace(/\/[a-zà-ÿ]+/gi, ""));
      const gendered = variant.match(/([a-zà-ÿ]+)\/([a-zà-ÿ]+)/i);
      if (gendered) {
        const [, stem, suffix] = gendered;
        out.push(variant.replace(gendered[0], stem));
        out.push(variant.replace(gendered[0], stem.slice(0, -1) + suffix));
      }
    }
    if (variant.includes("…")) out.push(variant.replace(/…/g, "").trim());
  });
  return out;
}

function checkTyped(phrase, typed) {
  const strict = !!state.settings.accentStrict;
  const value = stripForCompare(typed, strict);
  if (!value) return false;
  const openEnded = String(phrase.target).includes("…");
  return typeVariants(phrase).some((variant) => {
    const target = stripForCompare(variant, strict);
    if (!target) return false;
    if (value === target) return true;
    return openEnded && value.startsWith(target + " ");
  });
}

function firstLettersHint(target) {
  return String(target)
    .replace(/…/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      const clean = word.replace(/[^\p{L}\p{N}]/gu, "");
      return clean ? clean[0] + "…" : word;
    })
    .join(" ");
}

function tokenOverlap(spoken, target) {
  const clean = (s) =>
    stripForCompare(s, false)
      .split(/[^\p{L}\p{N}]+/u)
      .filter(Boolean);
  const a = clean(spoken);
  const b = clean(target);
  if (!a.length || !b.length) return 0;
  const pool = b.slice();
  let hits = 0;
  a.forEach((word) => {
    const idx = pool.indexOf(word);
    if (idx !== -1) {
      hits += 1;
      pool.splice(idx, 1);
    }
  });
  return hits / b.length;
}

/* ---------- toast / sheet ---------- */

function showToast(message) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
}

function openResetSheet(langId) {
  sheet = { type: "reset", langId };
  pausedSheet = null;
  render();
}

/* ---------- formatting ---------- */

function greetingFor(langId, date = new Date()) {
  const h = date.getHours();
  if (langId === "it") {
    if (h < 12) return "Buongiorno";
    if (h < 18) return "Buon pomeriggio";
    return "Buonasera";
  }
  if (h < 11) return "Guten Morgen";
  if (h < 18) return "Guten Tag";
  return "Guten Abend";
}

function levelFor(xp) {
  return 1 + Math.floor((xp || 0) / 150);
}

function xpInLevel(xp) {
  return (xp || 0) % 150;
}

function accuracyFor(langId = state.lang) {
  const s = state.stats[langId] || { attempts: 0, correct: 0 };
  if (!s.attempts) return 0;
  return Math.round((s.correct / s.attempts) * 100);
}

function minutesFor(langId = state.lang) {
  const bucket = state.activity[langId] || {};
  let secs = 0;
  Object.values(bucket).forEach((d) => {
    secs += d.seconds || 0;
  });
  return Math.round(secs / 60);
}

function weekdayLabels(langId = state.lang) {
  const fmt = new Intl.DateTimeFormat(window.LANGUAGES[langId].locale, { weekday: "narrow" });
  const out = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    out.push({ date: d, key: dayKey(d), label: fmt.format(d) });
  }
  return out;
}

function phraseOfDay(langId = state.lang) {
  const list = allPhrases(langId);
  if (!list.length) return null;
  const day = Math.floor(Date.now() / 86400000);
  const p = list[day % list.length];
  return { phrase: p, unit: phraseUnit(p) };
}

function nextUnits(langId = state.lang, count = 6) {
  const units = getUnits(langId);
  const ranked = units
    .map((u, i) => ({ u, s: unitStats(u), i }))
    .sort((a, b) => {
      const ca = a.s.learned >= a.s.total ? 1 : 0;
      const cb = b.s.learned >= b.s.total ? 1 : 0;
      if (ca !== cb) return ca - cb;
      return a.i - b.i;
    });
  return ranked.slice(0, count).map((x) => ({ ...x.u, stats: x.s }));
}
