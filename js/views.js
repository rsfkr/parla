/* ==========================================================================
   Parla — icons, chrome, and the Today / Learn views
   ========================================================================== */

const ICONS = {
  home: '<path d="M3.5 10.7 12 3.5l8.5 7.2V20a1 1 0 0 1-1 1h-5v-6.3H9.5V21h-5a1 1 0 0 1-1-1z"/>',
  book: '<path d="M4.5 4.5A2.5 2.5 0 0 1 7 2h12.5v17.5H7A2.5 2.5 0 0 0 4.5 22z"/><path d="M4.5 19.5A2.5 2.5 0 0 1 7 17h12.5"/>',
  bolt: '<path d="M13.2 2.5 5 13.4h5.7L10.4 21.5 18.8 10h-5.6z"/>',
  chart: '<path d="M5 20v-6"/><path d="M12 20V5"/><path d="M19 20v-9"/>',
  sliders: '<path d="M4 7h9"/><path d="M18.5 7H20"/><circle cx="16" cy="7" r="2.2"/><path d="M4 17h3.5"/><path d="M12.5 17H20"/><circle cx="10" cy="17" r="2.2"/>',
  chevronRight: '<path d="m9 5 7 7-7 7"/>',
  chevronLeft: '<path d="m15 5-7 7 7 7"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  check: '<path d="m4.5 12.5 5 5L20 6.5"/>',
  play: '<path d="M8 5.2v13.6L19 12z" fill="currentColor" stroke="none"/>',
  speaker: '<path d="M11 4.8 6.3 9H3v6h3.3L11 19.2z"/><path d="M15.3 8.6a4.8 4.8 0 0 1 0 6.8"/><path d="M18.3 5.6a9 9 0 0 1 0 12.8"/>',
  headphones: '<path d="M4 13.5V12a8 8 0 0 1 16 0v1.5"/><rect x="3" y="13" width="4" height="7" rx="2"/><rect x="17" y="13" width="4" height="7" rx="2"/>',
  keyboard: '<rect x="2.5" y="6" width="19" height="12" rx="2.6"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8"/>',
  cards: '<rect x="8" y="3" width="13" height="16" rx="2.6"/><path d="M5.2 6.5H4.6A1.6 1.6 0 0 0 3 8.1v11.3A1.6 1.6 0 0 0 4.6 21h10.2"/>',
  chat: '<path d="M12 20.2c4.5 0 8.2-3.4 8.2-7.7S16.5 4.8 12 4.8 3.8 8.2 3.8 12.5c0 1.6.5 3.1 1.4 4.3l-1 3.4 3.7-1a8.9 8.9 0 0 0 4.1 1z"/>',
  mic: '<rect x="9" y="2.5" width="6" height="11.5" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0"/><path d="M12 18v3.5"/>',
  flame: '<path d="M12 22c4 0 7-2.6 7-6.5 0-3-1.8-5-3.7-6.7C13.7 7.2 12.6 5 12.6 2c-3 2.2-4.4 4.8-4.4 7.2 0 .8.1 1.4.3 2-1.4-.4-2.4-1.3-3-2.2C4.6 10.5 5 13 5 15.5 5 19.4 8 22 12 22z"/>',
  lightbulb: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M8.2 14.8a6 6 0 1 1 7.6 0c-.8.8-1.3 1.6-1.3 3.2h-5c0-1.6-.5-2.4-1.3-3.2z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7.2V12l3.2 2"/>',
  trash: '<path d="M4 7h16"/><path d="M9 7V5.2A1.2 1.2 0 0 1 10.2 4h3.6A1.2 1.2 0 0 1 15 5.2V7"/><path d="M6.3 7l.9 12.1A1.5 1.5 0 0 0 8.7 20.5h6.6a1.5 1.5 0 0 0 1.5-1.4L17.7 7"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3.2 9h17.6M3.2 15h17.6"/><path d="M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.7"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>',
  arrowRight: '<path d="M4 12h15"/><path d="m13 5.5 6.5 6.5L13 18.5"/>',
  arrowUpRight: '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
  sparkle: '<path d="M12 3.2 13.5 9 19 10.5 13.5 12 12 17.8 10.5 12 5 10.5 10.5 9z"/><path d="M18.5 16.2l.7 2 2 .7-2 .8-.7 2-.8-2-2-.8 2-.7z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.2"/><path d="M12 7.5h.01"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
  rotate: '<path d="M20 11a8 8 0 1 0-2.4 5.7"/><path d="M20 4.5V11h-6.5"/>',
  lock: '<rect x="4.5" y="10" width="15" height="11" rx="2.5"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10"/>'
};

function svg(name, cls = "") {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls}" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

function ringHtml(pct, size = 56, stroke = 5, label = null) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = c * (1 - clamp(pct, 0, 1));
  return `<div class="ring" style="width:${size}px;height:${size}px">
    <svg width="${size}" height="${size}" aria-hidden="true">
      <circle class="ring-track" cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke-width="${stroke}"/>
      <circle class="ring-fill" cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke-width="${stroke}" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${dash.toFixed(1)}"/>
    </svg>
    <span class="ring-label">${esc(label != null ? label : Math.round(pct * 100) + "%")}</span>
  </div>`;
}

function hexToRgba(hex, alpha) {
  const clean = String(hex).replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  const num = parseInt(full, 16);
  if (Number.isNaN(num)) return `rgba(10,132,255,${alpha})`;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/* ---------- chrome ---------- */

function topbarHtml() {
  return `<header class="topbar">
    <button class="brand" data-action="brand-home" aria-label="Parla — go to Today">parla<span class="dot">.</span></button>
    <div class="lang-switch" role="group" aria-label="Course language">
      ${LANG_IDS.map(
        (id) => `<button class="lang-opt ${id === state.lang ? "active" : ""}" data-action="switch-lang" data-lang="${id}" aria-pressed="${id === state.lang}">
          <span class="flag">${window.LANGUAGES[id].flag}</span><span>${window.LANGUAGES[id].name}</span>
        </button>`
      ).join("")}
    </div>
  </header>`;
}

const TABS = [
  { id: "today", label: "Today", icon: "home" },
  { id: "learn", label: "Learn", icon: "book" },
  { id: "practice", label: "Practice", icon: "bolt" },
  { id: "progress", label: "Progress", icon: "chart" },
  { id: "settings", label: "Settings", icon: "sliders" }
];

function tabbarHtml() {
  return `<nav class="tabbar" aria-label="Main">
    ${TABS.map(
      (t) => `<button class="tab ${state.tab === t.id ? "active" : ""}" data-action="go-tab" data-tab="${t.id}" aria-current="${state.tab === t.id ? "page" : "false"}">
        ${svg(t.icon)}<span>${t.label}</span>
      </button>`
    ).join("")}
  </nav>`;
}

/* ---------- Today ---------- */

function heroCopy(plan, done) {
  const reviewLabel = plan.reviews === 1 ? "1 review" : `${plan.reviews} reviews`;
  let title;
  let meta;
  let cta;
  if (plan.total === 0) {
    title = "All caught up";
    meta = "Every phrase is in memory. A short role-play keeps it warm.";
    cta = "Free practice";
  } else if (plan.newCount > 0) {
    title = `${plan.newCount} new phrase${plan.newCount === 1 ? "" : "s"}`;
    meta = plan.reviews > 0 ? `${reviewLabel} waiting · about ${plan.minutes} min` : `About ${plan.minutes} minutes of ${window.LANGUAGES[state.lang].englishName}`;
    cta = done ? "Keep going" : "Start today's session";
  } else if (plan.reviews > 0) {
    title = `${plan.reviews} review${plan.reviews === 1 ? "" : "s"}`;
    meta = `About ${plan.minutes} min · keep the memory strong`;
    cta = "Start review";
  } else {
    title = "Review session";
    meta = "A little retrieval beats more scrolling.";
    cta = "Practice now";
  }
  return { title, meta, cta };
}

function viewToday() {
  const L = getLang();
  const plan = planPreview();
  const log = todayLog();
  const goal = state.settings.goal;
  const newToday = log.new || 0;
  const pct = clamp(newToday / goal, 0, 1);
  const done = newToday >= goal;
  const streak = state.streak[state.lang] || freshStreak();
  const stats = learnStats();
  const vocab = vocabTotals();
  const copy = heroCopy(plan, done);
  const streakLine = streak.current > 1 ? ` · ${streak.current}-day streak` : "";
  const units = nextUnits(state.lang, 6);
  const pod = phraseOfDay();

  return `<div class="page">
    <div class="large-title">
      <h1>${esc(greetingFor(state.lang))}.</h1>
      <p>${done ? "Daily goal done. Anything extra is a bonus." : `Ready for ten minutes of ${L.englishName}?`}</p>
    </div>

    <section class="hero" style="--g1:${L.gradient[0]};--g2:${L.gradient[1]};--g3:${L.gradient[2]}" aria-label="Today's session">
      <div class="hero-top">
        <div>
          <div class="hero-eyebrow">${done ? "Goal complete" : "Today's session"}</div>
          <h2 class="hero-title">${esc(copy.title)}</h2>
          <p class="hero-meta">${esc(copy.meta + streakLine)}</p>
        </div>
        ${ringHtml(pct, 58, 5)}
      </div>
      <button class="hero-cta" data-action="start-daily">${esc(copy.cta)} ${svg("arrowRight")}</button>
    </section>

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">Continue learning</h2>
        <button class="section-link" data-action="go-tab" data-tab="learn">All units</button>
      </div>
      <div class="unit-scroll">
        ${units.map(unitCardHtml).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">Quick practice</h2>
        <span class="tiny muted">${stats.due} due now</span>
      </div>
      <div class="practice-grid">
        <button class="practice-tile" data-action="start-mode" data-mode="flashcards">
          ${stats.due > 0 ? `<span class="tile-badge">${stats.due}</span>` : ""}
          <span class="tile-icon" style="--tile:var(--purple-soft);--tile-ink:var(--purple)">${svg("cards")}</span>
          <h3>Review</h3>
          <p>Flip, recall, rate yourself</p>
        </button>
        <button class="practice-tile" data-action="start-mode" data-mode="listening">
          <span class="tile-icon" style="--tile:var(--teal-soft);--tile-ink:var(--teal)">${svg("headphones")}</span>
          <h3>Listening</h3>
          <p>Train your ear, choose the meaning</p>
        </button>
        <button class="practice-tile" data-action="start-mode" data-mode="typing">
          <span class="tile-icon" style="--tile:var(--orange-soft);--tile-ink:var(--orange)">${svg("keyboard")}</span>
          <h3>Build sentences</h3>
          <p>Recall the phrase from English</p>
        </button>
        <button class="practice-tile" data-action="open-roleplays">
          <span class="tile-icon" style="--tile:var(--pink-soft);--tile-ink:var(--pink)">${svg("chat")}</span>
          <h3>Role-play</h3>
          <p>${L.dialogues.length} real-life scenes</p>
        </button>
      </div>
      <button class="vocab-banner" data-action="open-vocab">
        <span class="vocab-banner-icon">${svg("book")}</span>
        <span class="row-body">
          <strong>Vocabulary</strong>
          <small>${vocab.total} words in ${vocab.sets} sets · ${vocab.learned} in memory</small>
        </span>
        <span class="row-meta">${vocab.due ? vocab.due + " due" : `${Math.max(0, vocab.total - vocab.learned)} new`}</span>
        ${svg("chevronRight", "chevron")}
      </button>
    </section>

    ${
      pod
        ? `<section class="section">
      <div class="section-head">
        <h2 class="section-title">Phrase of the day</h2>
        <span class="tiny muted">${esc(pod.unit.icon + " " + pod.unit.title)}</span>
      </div>
      <article class="card pod">
        <div class="label">${esc(L.name)} · everyday</div>
        <div class="pod-main">
          <div>
            <p class="pod-target">${esc(pod.phrase.target)}</p>
            <p class="pod-phon">${esc(pod.phrase.say)}</p>
            <p class="pod-en">${esc(pod.phrase.en)}</p>
          </div>
          <button class="play-btn" data-action="play" data-text="${esc(pod.phrase.target)}" aria-label="Play phrase">${svg("speaker")}</button>
        </div>
        ${pod.phrase.note ? `<div class="pod-note">${svg("lightbulb")}<span>${esc(pod.phrase.note)}</span></div>` : ""}
      </article>
    </section>`
        : ""
    }

    <p class="app-foot">${stats.learned} of ${stats.total} phrases in memory · ${esc(L.level)}</p>
  </div>`;
}

function unitCardHtml(unit) {
  const stats = unit.stats || unitStats(unit);
  const pct = stats.total ? stats.learned / stats.total : 0;
  return `<button class="unit-card" data-action="open-unit" data-unit="${unit.id}">
    <span class="unit-icon" style="--tint:${unit.tint}" aria-hidden="true">${unit.icon}</span>
    <h3>${esc(unit.title)}</h3>
    <span class="unit-meta">${stats.learned}/${stats.total} learned</span>
    <span class="progress-line" aria-hidden="true"><span style="width:${Math.round(pct * 100)}%"></span></span>
    <span class="unit-pct">${Math.round(pct * 100)}%</span>
  </button>`;
}

/* ---------- Learn ---------- */

function viewLearn() {
  const L = getLang();
  const stats = learnStats();
  const vocab = vocabTotals();
  const pct = stats.total ? stats.learned / stats.total : 0;
  const units = getUnits(state.lang);
  return `<div class="page">
    <div class="large-title">
      <h1>Learn</h1>
      <p>${esc(L.name)} · ${esc(L.level)} — ${esc(L.tagline)}</p>
    </div>

    <div class="course-card" style="margin-top:18px">
      ${ringHtml(pct, 64, 6)}
      <div class="course-body">
        <h2>${esc(L.englishName)} conversations</h2>
        <p>${stats.learned} of ${stats.total} phrases in memory · ${stats.due} due now</p>
      </div>
    </div>

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">Vocabulary</h2>
        <span class="tiny muted">${vocab.learned}/${vocab.total} words</span>
      </div>
      <div class="list">
        <button class="row" data-action="open-vocab">
          <span class="row-icon" style="--tint:var(--green-soft);--tile-ink:var(--green)">${svg("book")}</span>
          <span class="row-body">
            <span class="row-title">Word sets</span>
            <span class="row-sub">Numbers, family, food, travel, useful verbs…</span>
          </span>
          <span class="row-meta">${vocab.sets} sets</span>
          ${svg("chevronRight", "chevron")}
        </button>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">Course units</h2>
        <span class="tiny muted">${stats.total} phrases</span>
      </div>
      <div class="list">
        ${units
          .map((unit, index) => {
            const s = unitStats(unit);
            const uPct = s.total ? Math.round((s.learned / s.total) * 100) : 0;
            return `<button class="row" data-action="open-unit" data-unit="${unit.id}">
              <span class="row-icon" style="--tint:${unit.tint}">${unit.icon}</span>
              <span class="row-body">
                <span class="row-title">${index + 1}. ${esc(unit.title)}</span>
                <span class="row-sub">${esc(unit.level || "A1")} · ${esc(unit.local)}${s.due ? ` · ${s.due} due` : ""}</span>
                <span class="progress-line" aria-hidden="true"><span style="width:${uPct}%"></span></span>
              </span>
              <span class="row-meta">${s.learned}/${s.total}</span>
              ${svg("chevronRight", "chevron")}
            </button>`;
          })
          .join("")}
      </div>
    </section>

    <div class="coach">
      ${svg("lightbulb")}
      <p><strong>How this course works:</strong> hear it, understand it, say it, type it. Each unit is a conversation you could actually have on a trip — not a grammar table.</p>
    </div>

    <p class="app-foot">A1 → A2 · ${units.length} conversation units · ${stats.total} phrases · ${vocab.total} words<br>New material unlocks a few cards at a time, so reviews stay manageable.</p>
  </div>`;
}

/* ---------- Unit detail ---------- */

function viewUnit() {
  const unit = unitById(state.lang, state.route && state.route.unitId);
  if (!unit) return viewLearn();
  const stats = unitStats(unit);
  const pct = stats.total ? stats.learned / stats.total : 0;
  const dialogues = getLang().dialogues.filter((d) => d.unitId === unit.id);
  const showEn = state.settings.showEn;

  return `<div class="page">
    <button class="backlink" data-action="back-learn">${svg("chevronLeft")} Learn</button>

    <div class="unit-head">
      <span class="unit-hero-icon" style="--tint:${unit.tint}">${unit.icon}</span>
      <div>
        <div class="unit-title-row">
          <h1>${esc(unit.title)}</h1>
          <span class="level-chip">${esc(unit.level || "A1")}</span>
        </div>
        <p class="unit-local">${esc(unit.local)}</p>
      </div>
    </div>
    <p class="unit-blurb">${esc(unit.blurb)}</p>

    <div class="unit-progress-card">
      ${ringHtml(pct, 54, 5)}
      <div class="unit-progress-body">
        <strong>${stats.learned} of ${stats.total} phrases in memory</strong>
        <span>${stats.due ? `${stats.due} ready for review` : stats.learned === stats.total ? "Unit complete — keep it warm" : "New phrases unlock as you go"}</span>
      </div>
    </div>

    <button class="btn btn-primary" style="margin-top:12px" data-action="start-unit" data-unit="${unit.id}">
      ${stats.learned === 0 ? "Start this unit" : stats.due ? "Review this unit" : "Practice this unit"}
    </button>

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">Phrases</h2>
        <span class="tiny muted">Tap to reveal the note</span>
      </div>
      <div class="list phrase-list">
        ${unit.phrases
          .map((p) => {
            const open = expandedPhrases.has(p.id);
            const known = !!recordOf(p);
            return `<div class="phrase-row">
              <button class="phrase-main" data-action="toggle-phrase" data-id="${p.id}" aria-expanded="${open}">
                <span class="phrase-target">${esc(p.target)}</span>
                ${showEn ? `<span class="phrase-en">${esc(p.en)}</span>` : ""}
                <span class="phrase-say">${esc(p.say)}</span>
              </button>
              ${known ? `<span class="learnt-dot" title="In memory"></span>` : ""}
              <button class="play-btn sm" data-action="play" data-text="${esc(p.target)}" aria-label="Play ${esc(p.target)}">${svg("speaker")}</button>
            </div>
            ${
              open
                ? `<div class="phrase-note">${svg("lightbulb")}<span>${esc(p.note || "Hear it, say it out loud, then use it in the dialogue below.")}</span></div>`
                : ""
            }`;
          })
          .join("")}
      </div>
    </section>

    ${
      dialogues.length
        ? `<section class="section">
      <div class="section-head">
        <h2 class="section-title">Use it in a scene</h2>
        <span class="tiny muted">${dialogues.length} role-play${dialogues.length === 1 ? "" : "s"}</span>
      </div>
      ${dialogues.map(dialogueCardHtml).join("")}
    </section>`
        : ""
    }

    <div class="coach">
      ${svg("headphones")}
      <p><strong>Best next step:</strong> play each phrase, repeat it out loud twice, then open the role-play. Using a phrase in a scene is what makes it stick.</p>
    </div>
  </div>`;
}

function dialogueCardHtml(d) {
  return `<button class="dialogue-card" data-action="start-dialog" data-dialog="${d.id}">
    <span class="d-icon">${d.icon}</span>
    <span class="row-body">
      <h3>${esc(d.title)}</h3>
      <p>${esc(d.place)}</p>
    </span>
    <span class="start-dot">${svg("play")}</span>
  </button>`;
}

/* ---------- Vocabulary ---------- */

function vocabRowHtml(set) {
  const s = setStats(set);
  const pct = s.total ? Math.round((s.learned / s.total) * 100) : 0;
  return `<button class="row" data-action="open-vocab-set" data-set="${set.id}">
    <span class="row-icon" style="--tint:${set.tint}">${set.icon}</span>
    <span class="row-body">
      <span class="row-title">${esc(set.title)}</span>
      <span class="row-sub">${esc(set.local)} · ${s.total} words${s.due ? ` · ${s.due} due` : ""}</span>
      <span class="progress-line" aria-hidden="true"><span style="width:${pct}%"></span></span>
    </span>
    <span class="row-meta">${s.learned}/${s.total}</span>
    ${svg("chevronRight", "chevron")}
  </button>`;
}

function viewVocab() {
  const L = getLang();
  const sets = getVocab(state.lang);
  const totals = vocabTotals();
  const q = vocabQuery.trim().toLowerCase();
  const shown = sets.filter((set) => {
    if (!q) return true;
    return (
      set.title.toLowerCase().includes(q) ||
      set.local.toLowerCase().includes(q) ||
      set.words.some((w) => w.term.toLowerCase().includes(q) || w.en.toLowerCase().includes(q))
    );
  });
  const pct = totals.total ? totals.learned / totals.total : 0;

  return `<div class="page">
    <button class="backlink" data-action="back-learn">${svg("chevronLeft")} Learn</button>

    <div class="large-title">
      <h1>Vocabulary</h1>
      <p>${totals.total} words in ${totals.sets} themed sets. Ten words at a time is plenty.</p>
    </div>

    <div class="course-card" style="margin-top:18px">
      ${ringHtml(pct, 64, 6)}
      <div class="course-body">
        <h2>${esc(L.englishName)} words</h2>
        <p>${totals.learned} of ${totals.total} in memory${totals.due ? ` · ${totals.due} due now` : ""}</p>
      </div>
    </div>

    <button class="btn btn-primary" style="margin-top:12px" data-action="start-vocab-all">Practice all words</button>

    <label class="vocab-search" for="vocabSearch">
      ${svg("search")}
      <input id="vocabSearch" type="search" value="${esc(vocabQuery)}" placeholder="Search words, e.g. house" autocomplete="off" aria-label="Search vocabulary">
    </label>

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">Word sets</h2>
        <span class="tiny muted">${q ? `${shown.length} match${shown.length === 1 ? "" : "es"}` : `${sets.length} sets`}</span>
      </div>
      ${
        shown.length
          ? `<div class="list">${shown.map(vocabRowHtml).join("")}</div>`
          : `<div class="empty-state"><p>No words match “${esc(vocabQuery)}”.</p><button class="btn btn-secondary" data-action="clear-vocab-search">Clear search</button></div>`
      }
    </section>

    <p class="app-foot">Words use the same spaced-repetition engine as phrases.<br>Tap a set to read the list, or start a drill.</p>
  </div>`;
}

function viewVocabSet() {
  const set = vocabById(state.lang, state.route && state.route.setId);
  if (!set) return viewVocab();
  const s = setStats(set);
  const pct = s.total ? s.learned / s.total : 0;
  const showEn = state.settings.showEn;

  return `<div class="page">
    <button class="backlink" data-action="back-vocab">${svg("chevronLeft")} Vocabulary</button>

    <div class="unit-head">
      <span class="unit-hero-icon" style="--tint:${set.tint}">${set.icon}</span>
      <div>
        <h1>${esc(set.title)}</h1>
        <p class="unit-local">${esc(set.local)}</p>
      </div>
    </div>
    <p class="unit-blurb">${esc(set.blurb)}</p>

    <div class="unit-progress-card">
      ${ringHtml(pct, 54, 5)}
      <div class="unit-progress-body">
        <strong>${s.learned} of ${s.total} words in memory</strong>
        <span>${s.due ? `${s.due} ready for review` : s.learned === s.total ? "Set complete — keep it warm" : "New words unlock six at a time"}</span>
      </div>
    </div>

    <button class="btn btn-primary" style="margin-top:12px" data-action="start-vocab" data-set="${set.id}">
      ${s.learned === 0 ? "Start this set" : s.due ? "Review this set" : "Practice this set"}
    </button>

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">Words</h2>
        <span class="tiny muted">Tap a word for a note</span>
      </div>
      <div class="list phrase-list">
        ${set.words
          .map((w) => {
            const open = expandedPhrases.has(w.id);
            const known = !!recordOf(w);
            return `<div class="phrase-row">
              <button class="phrase-main" data-action="toggle-phrase" data-id="${w.id}" aria-expanded="${open}">
                <span class="phrase-target">${esc(w.term)}</span>
                ${showEn ? `<span class="phrase-en">${esc(w.en)}</span>` : ""}
                <span class="phrase-say">${esc(w.say)}</span>
              </button>
              ${known ? `<span class="learnt-dot" title="In memory"></span>` : ""}
              <button class="play-btn sm" data-action="play" data-text="${esc(w.term)}" aria-label="Play ${esc(w.term)}">${svg("speaker")}</button>
            </div>
            ${
              open
                ? `<div class="phrase-note">${svg("lightbulb")}<span>${esc(w.note || "Say it out loud twice, then use it in a sentence of your own.")}</span></div>`
                : ""
            }`;
          })
          .join("")}
      </div>
    </section>

    <div class="coach">
      ${svg("headphones")}
      <p><strong>Best next step:</strong> read the set out loud, then run the drill. Words stick faster when you meet them inside a sentence.</p>
    </div>
  </div>`;
}

/* ---------- Practice ---------- */

function viewPractice() {
  const stats = learnStats();
  const vocab = vocabTotals();
  const L = getLang();
  return `<div class="page">
    <div class="large-title">
      <h1>Practice</h1>
      <p>Free practice — pick whatever your brain needs today.</p>
    </div>

    <div class="coach">
      ${svg("sparkle")}
      <p><strong>Output beats input.</strong> You can recognise a phrase and still not be able to say it. Choose the modes that make you produce ${esc(L.englishName)}.</p>
    </div>

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">Choose a drill</h2>
        <span class="tiny muted">${stats.due} due</span>
      </div>
      <div class="list">
        <button class="row" data-action="start-mode" data-mode="flashcards">
          <span class="row-icon" style="--tint:var(--purple-soft);--tile-ink:var(--purple)">${svg("cards")}</span>
          <span class="row-body">
            <span class="row-title">Flashcards</span>
            <span class="row-sub">Recall the meaning, then rate your memory</span>
          </span>
          <span class="row-meta ${stats.due ? "mode-meta-due" : ""}">${stats.due ? stats.due + " due" : "review"}</span>
          ${svg("chevronRight", "chevron")}
        </button>
        <button class="row" data-action="start-mode" data-mode="listening">
          <span class="row-icon" style="--tint:var(--teal-soft);--tile-ink:var(--teal)">${svg("headphones")}</span>
          <span class="row-body">
            <span class="row-title">Listening</span>
            <span class="row-sub">Hear a phrase, choose what it means</span>
          </span>
          <span class="row-meta">8 cards</span>
          ${svg("chevronRight", "chevron")}
        </button>
        <button class="row" data-action="start-mode" data-mode="typing">
          <span class="row-icon" style="--tint:var(--orange-soft);--tile-ink:var(--orange)">${svg("keyboard")}</span>
          <span class="row-body">
            <span class="row-title">Build sentences</span>
            <span class="row-sub">Translate from English, with a word bank if needed</span>
          </span>
          <span class="row-meta">6 cards</span>
          ${svg("chevronRight", "chevron")}
        </button>
        <button class="row" data-action="start-mode" data-mode="speaking">
          <span class="row-icon" style="--tint:var(--blue);--tile-ink:#fff;background:var(--blue)">${svg("mic")}</span>
          <span class="row-body">
            <span class="row-title">Speaking</span>
            <span class="row-sub">Listen, repeat out loud, optional mic check</span>
          </span>
          <span class="row-meta">6 cards</span>
          ${svg("chevronRight", "chevron")}
        </button>
        <button class="row" data-action="open-vocab">
          <span class="row-icon" style="--tint:var(--green-soft);--tile-ink:var(--green)">${svg("book")}</span>
          <span class="row-body">
            <span class="row-title">Vocabulary</span>
            <span class="row-sub">${vocab.sets} themed word sets, from numbers to verbs</span>
          </span>
          <span class="row-meta">${vocab.learned}/${vocab.total}</span>
          ${svg("chevronRight", "chevron")}
        </button>
        <button class="row" data-action="open-roleplays">
          <span class="row-icon" style="--tint:var(--pink-soft);--tile-ink:var(--pink)">${svg("chat")}</span>
          <span class="row-body">
            <span class="row-title">Role-play</span>
            <span class="row-sub">Hold a short conversation in a real-life scene</span>
          </span>
          <span class="row-meta">${L.dialogues.length} scenes</span>
          ${svg("chevronRight", "chevron")}
        </button>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2 class="section-title">Scenes</h2><span class="tiny muted">${esc(L.name)}</span></div>
      ${L.dialogues.map(dialogueCardHtml).join("")}
    </section>

    <p class="app-foot">Speaking aloud is the highest-value five minutes you can spend.<br>Your phone's mic is optional — the repetition is the point.</p>
  </div>`;
}

/* ---------- Progress ---------- */

function viewProgress() {
  const L = getLang();
  const stats = learnStats();
  const vocab = vocabTotals();
  const streak = state.streak[state.lang] || freshStreak();
  const xp = state.xp[state.lang] || 0;
  const accuracy = accuracyFor();
  const hasAttempts = (state.stats[state.lang]?.attempts || 0) > 0;
  const minutes = minutesFor();
  const days = weekdayLabels();
  const log = state.activity[state.lang] || {};
  const values = days.map((d) => (log[d.key] ? log[d.key].cards || 0 : 0));
  const max = Math.max(1, ...values);
  const memTotal = Math.max(1, stats.total);
  const segments = [
    { label: "Not started", value: stats.fresh, color: "var(--text-3)", op: 0.45 },
    { label: "Learning", value: stats.learning, color: "var(--orange)", op: 1 },
    { label: "Reviewing", value: stats.review, color: "var(--blue)", op: 1 },
    { label: "Mastered", value: stats.mastered, color: "var(--green)", op: 1 }
  ].filter((s) => s.value > 0);

  return `<div class="page">
    <div class="large-title">
      <h1>Progress</h1>
      <p>${esc(L.name)} · ${esc(L.level)} · Level ${levelFor(xp)}</p>
    </div>

    <div class="stat-hero">
      <span class="streak-flame">${svg("flame")}</span>
      <div class="stat-hero-body">
        <strong>${streak.current ? `${streak.current}-day streak` : "Start your streak"}</strong>
        <span>${streak.current ? `Best ${streak.best || 0}` : "One session is all it takes"} · ${xp} XP earned</span>
      </div>
      <span class="xp-pill">${xpInLevel(xp)}/150 XP</span>
    </div>

    <div class="stat-grid">
      <div class="stat-card"><b>${stats.learned}</b><span>In memory</span></div>
      <div class="stat-card"><b>${stats.mastered}</b><span>Mastered</span></div>
      <div class="stat-card"><b>${hasAttempts ? `${accuracy}%` : "—"}</b><span>Accuracy</span></div>
      <div class="stat-card"><b>${minutes}<small style="font-size:12px;font-weight:600"> min</small></b><span>Time studied</span></div>
    </div>

    <section class="section">
      <div class="section-head"><h2 class="section-title">Last seven days</h2><span class="tiny muted">${values.reduce((a, b) => a + b, 0)} cards</span></div>
      <div class="card">
        <div class="week-chart" role="img" aria-label="Cards studied over the last seven days">
          ${days
            .map((d, i) => {
              const v = values[i];
              const h = v ? Math.max(9, Math.round((v / max) * 100)) : 0;
              return `<div class="bar-col ${d.key === todayKey() ? "today" : ""}">
                <div class="bar-track"><span class="bar ${d.key === todayKey() ? "today" : ""}" style="height:${h}%"></span></div>
                <span class="bar-label">${esc(d.label)}</span>
              </div>`;
            })
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2 class="section-title">Memory health</h2><span class="tiny muted">${stats.total} phrases</span></div>
      <div class="card">
        <div class="memory-bar" aria-hidden="true">
          ${segments
            .map(
              (s) =>
                `<span style="width:${(s.value / memTotal) * 100}%;background:${s.color};opacity:${s.op}"></span>`
            )
            .join("")}
        </div>
        <div class="memory-legend">
          ${segments
            .map(
              (s) =>
                `<span><i style="background:${s.color};opacity:${s.op}"></i>${s.label} ${s.value}</span>`
            )
            .join("")}
        </div>
        <p class="tiny muted" style="margin:13px 0 0;line-height:1.45">Spaced reviews bring a phrase back right before you would forget it. A card reaches <strong>Mastered</strong> after a three-week interval.</p>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">Vocabulary</h2>
        <span class="tiny muted">${vocab.learned}/${vocab.total} words</span>
      </div>
      <div class="card">
        <div class="vocab-progress-head">
          <strong>${vocab.started} of ${vocab.sets} sets started</strong>
          <span>${vocab.total ? Math.round((vocab.learned / vocab.total) * 100) : 0}%</span>
        </div>
        <div class="progress-line" aria-hidden="true"><span style="width:${vocab.total ? Math.round((vocab.learned / vocab.total) * 100) : 0}%"></span></div>
        <p class="tiny muted" style="margin:12px 0 14px;line-height:1.45">${vocab.due ? `${vocab.due} word${vocab.due === 1 ? "" : "s"} ready for review.` : "No words due right now — a short drill keeps them warm."}</p>
        <button class="btn btn-secondary" data-action="open-vocab">Open vocabulary</button>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2 class="section-title">Unit progress</h2></div>
      <div class="list">
        ${getUnits(state.lang)
          .map((unit) => {
            const s = unitStats(unit);
            const uPct = s.total ? Math.round((s.learned / s.total) * 100) : 0;
            return `<button class="up-row" data-action="open-unit" data-unit="${unit.id}">
              <span class="row-icon" style="--tint:${unit.tint}">${unit.icon}</span>
              <span class="up-body">
                <strong>${esc(unit.title)}</strong>
                <span class="progress-line" aria-hidden="true"><span style="width:${uPct}%"></span></span>
              </span>
              <span class="up-pct">${s.learned}/${s.total}</span>
            </button>`;
          })
          .join("")}
      </div>
    </section>

    <p class="app-foot">Accuracy covers every drill. Anything above 80% means the difficulty is about right.</p>
  </div>`;
}

/* ---------- Settings ---------- */

function toggleRow(key, title, sub) {
  const on = !!state.settings[key];
  return `<div class="setting-row">
    <span class="row-body"><strong>${esc(title)}</strong><small>${esc(sub)}</small></span>
    <button class="switch ${on ? "on" : ""}" data-action="toggle-setting" data-key="${key}" role="switch" aria-checked="${on}" aria-label="${esc(title)}"></button>
  </div>`;
}

function viewSettings() {
  const L = getLang();
  return `<div class="page">
    <div class="large-title">
      <h1>Settings</h1>
      <p>Make the daily habit fit your brain, not the other way round.</p>
    </div>

    <section class="section">
      <div class="settings-label">Daily habit</div>
      <div class="list">
        <div class="setting-block">
          <div class="setting-block-head"><strong>New phrases per day</strong><span>${state.settings.goal} selected</span></div>
          <div class="segmented" role="group" aria-label="New phrases per day">
            ${[3, 5, 8]
              .map(
                (n) =>
                  `<button class="seg-btn ${state.settings.goal === n ? "active" : ""}" data-action="set-goal" data-value="${n}" aria-pressed="${state.settings.goal === n}">${n}</button>`
              )
              .join("")}
          </div>
        </div>
        ${toggleRow("autoPlay", "Auto-play audio", "Hear each new phrase as it appears")}
      </div>
    </section>

    <section class="section">
      <div class="settings-label">Audio</div>
      <div class="list">
        <div class="setting-block">
          <div class="setting-block-head"><strong>Speaking speed</strong><span>${state.settings.rate === 0.75 ? "Slower" : state.settings.rate === 0.9 ? "Natural" : "Full speed"}</span></div>
          <div class="segmented" role="group" aria-label="Speaking speed">
            ${[
              { v: 0.75, label: "Slow" },
              { v: 0.9, label: "Natural" },
              { v: 1, label: "Fast" }
            ]
              .map(
                (o) =>
                  `<button class="seg-btn ${state.settings.rate === o.v ? "active" : ""}" data-action="set-rate" data-value="${o.v}" aria-pressed="${state.settings.rate === o.v}">${o.label}</button>`
              )
              .join("")}
          </div>
        </div>
        ${toggleRow(
          "accentStrict",
          "Strict accents when typing",
          L.id === "de" ? "Off is kinder: schon counts for schön" : "Off is kinder: caffe counts for caffè"
        )}
      </div>
    </section>

    <section class="section">
      <div class="settings-label">Practice</div>
      <div class="list">
        ${toggleRow("showEn", "Show English in phrase lists", "Hide it for a harder recall test")}
        <div class="setting-block">
          <div class="setting-block-head"><strong>Appearance</strong><span>System matches your device</span></div>
          <div class="segmented" role="group" aria-label="Appearance">
            ${[
              { v: "system", label: "System" },
              { v: "light", label: "Light" },
              { v: "dark", label: "Dark" }
            ]
              .map(
                (o) =>
                  `<button class="seg-btn ${state.settings.theme === o.v ? "active" : ""}" data-action="set-theme" data-value="${o.v}" aria-pressed="${state.settings.theme === o.v}">${o.label}</button>`
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="settings-label">Your data</div>
      <div class="list">
        ${LANG_IDS.map((id) => {
          const lg = window.LANGUAGES[id];
          const s = learnStats(id);
          return `<button class="row" data-action="reset-progress" data-lang="${id}">
            <span class="row-icon" style="--tint:var(--red-soft);--tile-ink:var(--red)">${svg("trash")}</span>
            <span class="row-body">
              <span class="row-title" style="color:var(--red)">Reset ${esc(lg.name)}</span>
              <span class="row-sub">${s.learned} phrases · ${state.streak[id].current || 0}-day streak · ${state.xp[id] || 0} XP</span>
            </span>
            ${svg("chevronRight", "chevron")}
          </button>`;
        }).join("")}
      </div>
    </section>

    <section class="section">
      <div class="settings-label">Why this works</div>
      <div class="card about-card">
        <h2>The method, in four lines</h2>
        <p>Parla is built around evidence from second-language acquisition — not streaks for their own sake.</p>
        <ul class="method-list">
          <li><span class="num">1</span><span><b>Spaced retrieval</b><span>You recall each phrase just before forgetting. Intervals grow: 1 day, 3 days, a week, three weeks.</span></span></li>
          <li><span class="num">2</span><span><b>Comprehensible chunks</b><span>You learn whole phrases you can use immediately, not isolated words or conjugation tables.</span></span></li>
          <li><span class="num">3</span><span><b>Production, not just recognition</b><span>Listening comes first, but typing and speaking force your brain to build the sentence.</span></span></li>
          <li><span class="num">4</span><span><b>Little and often</b><span>Ten focused minutes daily beats a two-hour weekend session. Consistency is the whole trick.</span></span></li>
        </ul>
      </div>
    </section>

    <p class="app-foot">Parla · v1.0 · Italiano & Deutsch<br>Designed for real conversations, not perfect grammar.</p>
  </div>`;
}

/* ---------- sheets ---------- */

function sheetHtml() {
  if (!sheet) return "";
  let inner = "";
  if (sheet.type === "roleplays") {
    const L = getLang();
    inner = `<h2>Role-play a real moment</h2>
      <p class="sheet-sub">${esc(L.name)} · play the other person, then choose your reply.</p>
      <div class="list">
        ${L.dialogues
          .map(
            (d) => `<button class="row" data-action="start-dialog" data-dialog="${d.id}">
              <span class="row-icon" style="--tint:var(--accent-soft)">${d.icon}</span>
              <span class="row-body"><span class="row-title">${esc(d.title)}</span><span class="row-sub">${esc(d.place)}</span></span>
              ${svg("chevronRight", "chevron")}
            </button>`
          )
          .join("")}
      </div>
      <button class="btn btn-secondary" data-action="close-sheet">Not now</button>`;
  } else if (sheet.type === "reset") {
    const lg = window.LANGUAGES[sheet.langId];
    const s = learnStats(sheet.langId);
    inner = `<h2>Reset ${esc(lg.name)}?</h2>
      <p class="sheet-sub">This clears ${s.learned} learned ${s.learned === 1 ? "phrase" : "phrases"}, your review schedule, ${state.streak[sheet.langId].current || 0}-day streak and ${state.xp[sheet.langId] || 0} XP for ${esc(lg.name)}. Your other language stays untouched. This cannot be undone.</p>
      <div class="sheet-actions">
        <button class="btn btn-destructive" data-action="confirm-reset" data-lang="${sheet.langId}">Reset ${esc(lg.name)} progress</button>
        <button class="btn btn-secondary" data-action="close-sheet">Keep my progress</button>
      </div>`;
  }
  return `<div class="sheet-backdrop" data-action="close-sheet"></div>
    <div class="sheet-wrap">
      <div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(sheet.type === "reset" ? "Reset progress" : "Choose a role-play")}">
        <div class="sheet-handle"></div>
        ${inner}
      </div>
    </div>`;
}

/* ---------- render ---------- */

function applyTheme() {
  const t = state.settings.theme;
  if (t === "system") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", t);
}

function applyAccent() {
  const L = getLang();
  document.documentElement.style.setProperty("--accent", L.accent);
  document.documentElement.style.setProperty("--accent-soft", hexToRgba(L.accent, 0.12));
  document.title = `Parla — ${L.name}`;
}

function render() {
  applyTheme();
  applyAccent();
  const app = document.getElementById("app");
  if (!app) return;

  let content = "";
  if (state.route && state.route.name === "unit") content = viewUnit();
  else if (state.route && state.route.name === "vocab") content = viewVocab();
  else if (state.route && state.route.name === "vocab-set") content = viewVocabSet();
  else if (state.tab === "learn") content = viewLearn();
  else if (state.tab === "practice") content = viewPractice();
  else if (state.tab === "progress") content = viewProgress();
  else if (state.tab === "settings") content = viewSettings();
  else content = viewToday();

  app.innerHTML =
    topbarHtml() +
    `<main id="main">${content}</main>` +
    tabbarHtml() +
    (sheet ? sheetHtml() : "") +
    (session ? sessionHtml() : "");

  document.body.classList.toggle("session-open", !!session);
  document.body.classList.toggle("sheet-open", !!sheet);

  const modalOpen = !!(session || sheet);
  document.querySelectorAll("#app > .topbar, #app > main, #app > .tabbar").forEach((el) => {
    if (modalOpen) el.setAttribute("inert", "");
    else el.removeAttribute("inert");
  });

  afterRender();
}

function afterRender() {
  if (session && session.kind === "dialog" && !session.finished) {
    const body = document.querySelector(".session-body");
    if (body) body.scrollTop = body.scrollHeight;
  }
}
