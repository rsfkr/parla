# Parla

A calm, iOS-style way to practise everyday **Italian** and **German** conversation in about ten minutes a day.

Parla is a small static web app — no build step, no backend, no dependencies. Progress stays in your browser.

## Run it

From this folder:

```bash
python3 -m http.server 4173
```

Open <http://localhost:4173>.

Any static file server works. Opening `index.html` directly with `file://` also mostly works, but a local server is recommended so speech features and storage behave consistently.

Service workers (and therefore offline mode) only run over `localhost` or HTTPS.

## Deploy

The repository is the deployable artefact — no build step. Pick one host:

**Cloudflare Pages** (recommended: free, unlimited bandwidth, global CDN)

1. Push the repository to GitHub (or GitLab).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Framework preset **None**, build command empty, output directory `/`.
4. **Save and Deploy.** Every push to `main` redeploys; pull requests get preview URLs.

**Netlify** (fastest first deploy)

1. Drag the project folder onto <https://app.netlify.com/drop>.
2. Or connect the repo with build command empty and publish directory `.`.
3. `netlify.toml` and `_headers` are already configured.

**GitHub Pages**

1. **Settings → Pages → Deploy from a branch → `main` → `/ (root)`**.
2. `.nojekyll` keeps Jekyll out of the way.

All paths in the app are relative and the manifest uses `./`, so hosting under a subpath (such as GitHub Pages project sites) works.

### Releasing a change

Assets are cached two ways: query strings in `index.html` and the service worker's `CACHE`. When you ship code, bump both together:

1. Change every `?v=…` number in `index.html` to the next number.
2. Change `const VERSION = "…"` in `sw.js` to the same number.
3. Run `node scripts/validate-data.js` — it fails if the two drift apart.

Content-only edits (`js/data-*.js`) still need the bump, because those files are precached.

## Installable app and offline mode

`manifest.webmanifest`, `sw.js`, and `icons/` make Parla an installable PWA:

- Android/Chrome: **Install app** from the address bar, or the install prompt.
- iOS/Safari: **Share → Add to Home Screen**.
- After the first visit, the shell and content are cached and the app opens without a connection. Progress stays in `localStorage`, so it works offline too.

The worker serves pages network-first (a deploy appears on the next visit) and assets stale-while-revalidate. The icon set is generated from code:

```bash
python3 scripts/make-icons.py   # requires Pillow
```

## Checks

```bash
node scripts/validate-data.js
```

This validates content (unique keys, required fields, dialogue answers, duplicate options) and wiring (asset paths in `index.html`, the service-worker precache list, version consistency, and the manifest). GitHub Actions runs it plus `node --check` on every push and pull request.

## What it does

- **Today** — one tap starts a daily session sized to your goal (3, 5 or 8 new phrases), plus a direct route into vocabulary.
- **Learn** — 24 real-life units per language, from greetings to health, opinions, the past, and B1 topics such as work, renting, and travel problems.
- **Vocabulary** — 15 themed word sets per language (152 words each) with search, spaced review, and dedicated drills.
- **Practice** — flip cards, listening recognition, typed production, speaking, word drills, and role-play dialogues.
- **Progress** — streak, XP, accuracy, a seven-day chart, memory health, vocabulary progress, and per-unit completion.
- **Settings** — daily goal, speech rate, auto-play, strict accents, English hints, light/dark/system theme, and per-language reset.

The interface follows iOS conventions: a single 480 px app shell, grouped lists, segmented controls, a tab bar, bottom sheets, safe-area padding, and automatic light/dark colours.

## How it teaches

Parla is built around a few well-established ideas from second-language acquisition:

1. **Spaced retrieval** — each phrase is recalled just before it would be forgotten. Intervals grow from one day to three days, a week, then three weeks. A light SM-2-style scheduler stores `ease`, `interval`, `due`, `reps`, and `lapses` for every card.
2. **Comprehensible chunks** — learners meet whole phrases they can use immediately, not isolated vocabulary or conjugation tables.
3. **Recognition before production** — new phrases are presented, then recognised by ear, then typed from English. Typing is accent-forgiving by default; a strict mode is available.
4. **Output under low stakes** — role-plays ask the learner to choose the socially right reply, with immediate feedback and a retry. Speaking practice uses the browser's speech recognition when available and self-rating otherwise.
5. **Little and often** — the daily plan is deliberately short. Streaks and XP reward consistency, not marathon sessions.

Every phrase includes a short note where it helps: register (`du`/`Sie`, `tu`/`Lei`), gender, a false friend, or a cultural detail.

## Content

| Language | Units | Phrases | Word sets | Words | Role-plays |
| --- | --- | --- | --- | --- | --- |
| Italian | 24 | 280 | 15 | 152 | 10 |
| German | 24 | 281 | 15 | 152 | 10 |

Units: greetings and introductions, cafés and restaurants, getting around, shopping and money, small talk and daily life, help and emergencies, hotels and travel, plans and work, family and people, home and neighborhood, food and the market, health and the doctor, weather and seasons, opinions and feelings, talking about the past, plans and the future, phone and technology, culture and free time, work and career, renting and paperwork, travel problems, news and opinions, environment and city life, and money and banking. Units carry an A1, A2, or B1 level badge, and the Learn page groups them by level.

Word sets: numbers, days and months, colors, family, food and drink, body and health, home and furniture, clothes, travel and transport, weather and nature, work and study, high-frequency verbs, work and career, money and banking, and environment and city.

Each language has ten dialogues: a café scene, meeting someone, finding the station, a pharmacy visit, a market, a broken appliance, weekend plans, a job interview, a lost suitcase, and a leak in the bathroom.

## Project structure

```
index.html              App shell, manifest links, script order, worker registration
manifest.webmanifest    Name, icons, standalone display, theme
sw.js                   Offline cache and fetch strategy
icons/                  Generated app icons (192, 512, maskable, apple-touch)
css/styles.css          Design tokens, layout, components, themes, responsive rules
js/data-it.js           Italian curriculum, vocabulary, and dialogues
js/data-de.js           German curriculum, vocabulary, and dialogues
js/app.js               State, persistence, SRS scheduling, session builders, speech
js/views.js             All page rendering, navigation chrome, sheets
js/session.js           Practice engine, role-play flow, event handling, boot
scripts/validate-data.js  Content, asset, and version checks (CI)
scripts/make-icons.py   Regenerates icons/ from code
netlify.toml, _headers  Cache headers for Netlify / Cloudflare Pages
.github/workflows/ci.yml  Syntax + content validation on push
```

Load order matters: the two data files, then `app.js`, `views.js`, and `session.js`.

## Progress and privacy

Everything is local. State is saved under the `localStorage` key `parla.v1`:

- `lang` — active course
- `settings` — goal, speech rate, theme, accent strictness, auto-play, English hints
- `progress` — one record per card key (`it:it-greet-1`, `de:de-cafe-2`, `it:it-v-food-3`, …)
- `activity` — per-language, per-day counters
- `stats` — attempts and correct answers per language
- `xp` and `streak` — per language
- `created` — first-run timestamp

No analytics, accounts, or third-party requests are involved. The only network traffic is loading the app's own files; speech uses the browser's built-in voices.

To reset everything, open the browser console and run:

```js
localStorage.removeItem("parla.v1");
location.reload();
```

Or use **Settings → Your data → Reset Italiano / Reset Deutsch** to clear one course.

## Customising content

Phrases live in `units[].phrases[]`:

```js
{
  target: "Un caffè, per favore.",
  en: "A coffee, please.",
  say: "oon kahf-FEH pehr fah-VOH-reh", // optional pronunciation hint
  note: "In Italy un caffè means espresso.", // optional
  alt: ["Un caffè", "Un caffè per favore"] // optional accepted variants
}
```

- `target` is the phrase shown and spoken.
- `en` is the English prompt and translation.
- `say` is an English-friendly pronunciation hint.
- `note` appears when a phrase is expanded.
- `alt` lists extra accepted answers; a slash in `target` is also treated as alternatives. Gendered endings such as `Sono americano/a.` accept both `Sono americano` and `Sono americana`.

Dialogues live in `dialogues[]`:

```js
{
  id: "it-d-cafe",
  unitId: "it-cafe",
  title: "At the café",
  local: "Al bar",
  icon: "☕",
  place: "A busy bar in Florence, 9am",
  lines: [
    { speaker: "Barista", text: "Buongiorno!", en: "Good morning!" },
    {
      you: true,
      prompt: "Order a cappuccino.",
      options: [
        { text: "Un cappuccino, per favore.", en: "A cappuccino, please." },
        { text: "Il conto, per favore.", en: "The bill, please." },
        { text: "Dov'è la stazione?", en: "Where's the station?" }
      ],
      answer: 0
    }
  ]
}
```

The `answer` index points at the correct option. Options are shuffled at runtime, and wrong choices are disabled with feedback so the learner can retry.

To add a unit, give it a stable `id` (for example `it-city`), a `title`, `local`, `level`, `icon`, `tint`, `blurb`, and a `phrases` array. Phrase keys are generated from the unit id and position, so keep unit ids stable once learners have progress.

Vocabulary lives in `vocab[]`:

```js
{
  id: "it-v-food",
  title: "Food & drink",
  local: "Cibo e bevande",
  icon: "🍽️",
  tint: "#FBF3DF",
  blurb: "Recognise a menu before you sit down.",
  words: [
    { term: "il pane", en: "bread", say: "eel PAH-neh" },
    { term: "la carne", en: "meat", say: "lah KAR-neh", note: "Optional note" }
  ]
}
```

`term` is displayed, spoken, and typed; `en` is the English prompt; `say` is the pronunciation hint; `note` is optional. Word keys are generated as `<set-id>-<position>` and use the same spaced-repetition store as phrases. Keep set ids stable.

## Audio and speaking

- Playback uses the Web Speech API (`speechSynthesis`) with the course locale (`it-IT` / `de-DE`).
- Speaking practice uses `SpeechRecognition` / `webkitSpeechRecognition` where available. If it is unavailable or permission is denied, the app falls back to self-rating.
- Voice quality and availability depend on the browser and operating system. Chrome, Edge, and Safari offer the best coverage.

## Accessibility and small screens

- Modal sheets and sessions mark the background as `inert`, so focus stays inside the active layer.
- `Escape` closes a sheet or session; number keys answer listening questions.
- Controls expose `aria-pressed`, `aria-checked`, and `aria-current` where appropriate.
- The layout was checked down to 340 px wide; the app shell is capped at 480 px on desktop.
- Reduced-motion preferences are respected.

## Limitations

- Progress is per browser profile. Clearing site data or using private browsing resets it.
- There is no account sync and no server-side storage.
- After a deploy, the service worker may show the cached shell for one visit; the next load picks up the new version.
- Speech recognition is not available in every browser; the self-rating fallback keeps speaking practice usable.
- Content spans A1–B1 everyday conversation, not exam preparation or grammar drilling.
