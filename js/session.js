/* ==========================================================================
   Parla — session engine, step rendering, and interactions
   ========================================================================== */

function currentStep() {
  if (!session || session.kind === "dialog" || session.finished) return null;
  return session.steps[session.index] || null;
}

function sessionTop(progress, label) {
  return `<div class="session-top">
    <button class="session-close" data-action="close-session" aria-label="Close session">${svg("x")}</button>
    <div class="session-track" role="progressbar" aria-label="Session progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(progress * 100)}"><span style="width:${Math.round(clamp(progress, 0, 1) * 100)}%"></span></div>
    <span class="session-count">${esc(label)}</span>
  </div>`;
}

function sessionHtml() {
  if (!session) return "";
  if (session.finished) return summaryHtml();
  if (session.kind === "dialog") return dialogHtml();

  const step = currentStep();
  if (!step) return summaryHtml();
  const total = session.steps.length;
  const progress = total ? session.index / total : 0;
  const foot = footHtml(step);
  return `<section class="session ${session.entering ? "first-run" : ""}" role="dialog" aria-modal="true" aria-label="${esc(session.title)}">
    ${sessionTop(progress, `${session.index + 1}/${total}`)}
    <div class="session-body ${step.kind === "learn" ? "" : "session-body--quiz"}" role="main">${stepHtml(step)}</div>
    ${foot ? `<div class="session-foot">${foot}</div>` : ""}
  </section>`;
}

/* ---------- steps ---------- */

function stepHtml(step) {
  if (step.kind === "learn") return learnStepHtml(step);
  if (step.kind === "listen") return listenStepHtml(step);
  if (step.kind === "type") return typeStepHtml(step);
  if (step.kind === "flash") return flashStepHtml(step);
  if (step.kind === "speak") return speakStepHtml(step);
  return "";
}

function learnStepHtml(step) {
  const L = window.LANGUAGES[session.lang];
  const p = step.phrase;
  return `<div class="learn-stage">
    <p class="step-kicker">${p.isWord ? "New word" : "New phrase"} · <em>${esc(L.name)}</em></p>
    <button class="big-play" data-action="play" data-text="${esc(p.target)}" aria-label="Play phrase">${svg("speaker")}</button>
    <h2 class="target-xl">${esc(p.target)}</h2>
    <p class="phon-lg">${esc(p.say)}</p>
    <p class="en-lg">${esc(p.en)}</p>
    ${p.note ? `<div class="note-box">${svg("lightbulb")}<span>${esc(p.note)}</span></div>` : ""}
    <button class="slow-link" data-action="play" data-text="${esc(p.target)}" data-rate="0.6">Play it slowly</button>
  </div>`;
}

function listenOptions(step) {
  if (step.options) return step.options;
  const p = step.phrase;
  const source = p.isWord ? allWords(session.lang) : allPhrases(session.lang);
  const pool = source.filter((o) => o.id !== p.id && o.en !== p.en);
  const distractors = shuffle(pool).slice(0, 3).map((o) => o.en);
  step.options = shuffle([p.en, ...distractors]);
  step.correctIndex = step.options.indexOf(p.en);
  return step.options;
}

function listenStepHtml(step) {
  const L = window.LANGUAGES[session.lang];
  const options = listenOptions(step);
  return `<div class="step-center">
    <div class="quiz-head">
      <p class="step-kicker">Listening · <em>${esc(L.name)}</em></p>
      <h2 class="quiz-question">What does it mean?</h2>
    </div>
    <button class="listen-orb" data-action="play" data-text="${esc(step.phrase.target)}" aria-label="Play phrase again">${svg("speaker")}</button>
    <p class="listen-hint">Tap to hear it again</p>
    <div class="options">
      ${options
        .map((label, i) => {
          let cls = "";
          if (step.answered) {
            if (i === step.correctIndex) cls = "correct";
            else if (i === step.picked) cls = "wrong";
            else cls = "dim";
          }
          return `<button class="option ${cls}" data-action="answer-listen" data-index="${i}" ${step.answered ? "disabled" : ""}>
            <span class="key">${i + 1}</span><span>${esc(label)}</span>
          </button>`;
        })
        .join("")}
    </div>
    ${listenFeedbackHtml(step)}
  </div>`;
}

function listenFeedbackHtml(step) {
  if (!step.answered) return "";
  const p = step.phrase;
  const ok = step.picked === step.correctIndex;
  return `<div class="feedback ${ok ? "good" : "bad"}" role="status">
    ${svg(ok ? "check" : "x")}
    <span>${ok ? "Correct" : "Not quite"} — <strong>${esc(p.target)}</strong> · ${esc(p.en)}</span>
  </div>`;
}

function typeBankWords(step) {
  if (step.bank) return step.bank;
  const raw = step.phrase.target.includes(" / ")
    ? step.phrase.target.split(" / ")[0]
    : step.phrase.target.replace(/\/[a-zà-ÿ]+/gi, "");
  step.bank = shuffle(raw.replace(/…/g, "").split(/\s+/).filter(Boolean));
  return step.bank;
}

function typeStepHtml(step) {
  const L = window.LANGUAGES[session.lang];
  const p = step.phrase;
  const answered = !!step.answered;
  const words = typeBankWords(step);
  return `<form id="typeForm" data-form="type" autocomplete="off" class="step-center">
    <p class="step-kicker">Recall · <em>${esc(L.name)}</em></p>
    <p class="prompt-en">“${esc(p.en)}”</p>
    <p class="prompt-sub">${step.hintUsed ? `Starts with “${esc(firstLettersHint(p.target))}”` : `Type the ${esc(L.englishName)} ${p.isWord ? "word" : "phrase"}`}</p>
    <input id="typeInput" class="type-input ${answered ? (step.typeCorrect ? "good" : "bad") : ""}" name="answer" type="text"
      value="${esc(step.draft || "")}" placeholder="Type here…" spellcheck="false" autocapitalize="off" autocorrect="off"
      ${answered ? "disabled" : ""} aria-label="Your answer in ${esc(L.englishName)}">
    ${
      !answered
        ? `<div class="type-tools">
            <button type="button" data-action="type-hint">Hint</button>
            <button type="button" data-action="type-bank">${step.showBank ? "Hide word bank" : "Word bank"}</button>
            <button type="button" data-action="type-skip">Show answer</button>
          </div>`
        : ""
    }
    ${
      !answered && step.showBank
        ? `<div class="word-bank">${words
            .map((w) => `<button type="button" class="word-chip" data-action="insert-word" data-word="${esc(w)}">${esc(w)}</button>`)
            .join("")}</div>`
        : ""
    }
    ${answered ? typeRevealHtml(step) : ""}
  </form>`;
}

function typeRevealHtml(step) {
  const p = step.phrase;
  if (step.typeCorrect) {
    return `<div class="answer-reveal" role="status">${svg("check")}<span>Correct — that's exactly it.<small>${esc(p.target)} · ${esc(p.say)}</small></span></div>`;
  }
  return `<div class="answer-reveal bad" role="status">${svg("info")}<span>${step.skipped ? "Here's the phrase:" : "Not quite. The phrase is:"}<small>${esc(p.target)} · ${esc(p.say)}</small></span></div>`;
}

function flashStepHtml(step) {
  const p = step.phrase;
  return `<div class="learn-stage">
    <p class="step-kicker">Flashcard · recall out loud</p>
    <button class="big-play" data-action="play" data-text="${esc(p.target)}" aria-label="Play phrase">${svg("speaker")}</button>
    <h2 class="target-xl">${esc(p.target)}</h2>
    <p class="phon-lg">${esc(p.say)}</p>
    ${
      step.revealed
        ? `<p class="en-lg">${esc(p.en)}</p>${p.note ? `<div class="note-box">${svg("lightbulb")}<span>${esc(p.note)}</span></div>` : ""}`
        : `<button class="btn btn-secondary" style="margin-top:28px;width:auto;padding:11px 20px" data-action="reveal-flash">Show meaning</button>`
    }
  </div>`;
}

function speakStepHtml(step) {
  const p = step.phrase;
  const support = !!speechCtor();
  const res = step.speech;
  return `<div class="speak-stage">
    <p class="step-kicker">Speaking · say it out loud</p>
    <p class="speak-target">${esc(p.target)}</p>
    <p class="speak-phon">${esc(p.say)}</p>
    <p class="speak-en">${esc(p.en)}</p>
    <button class="big-play" style="margin-top:24px" data-action="play" data-text="${esc(p.target)}" aria-label="Play phrase">${svg("speaker")}</button>
    ${
      support
        ? `<button class="mic-btn ${step.listening ? "listening" : ""}" data-action="speak-mic" aria-label="Check my pronunciation">${svg("mic")}</button>
           <p class="mic-note">Optional: tap the mic and repeat. The check happens in your browser — nothing is uploaded.</p>`
        : `<p class="mic-note" style="margin-top:26px">Say it twice out loud, exaggerating the vowels. Speech scoring isn't available in this browser, so trust your ear.</p>`
    }
    ${
      res
        ? `<div class="transcript" role="status">Heard: “${esc(res.text || "…")}”<br><b>${esc(
            res.score >= 0.65 ? "That matches well — nice pronunciation." : res.score > 0.2 ? "Close. Listen once more and slow down." : "Not quite caught. Try again a little slower."
          )}</b></div>`
        : ""
    }
  </div>`;
}

function footHtml(step) {
  if (step.kind === "learn") {
    return `<button class="btn btn-primary" data-action="step-next">Got it</button>`;
  }
  if (step.kind === "listen") {
    return step.answered ? `<button class="btn btn-primary" data-action="step-next">Continue</button>` : "";
  }
  if (step.kind === "type") {
    return step.answered
      ? `<button class="btn btn-primary" data-action="step-next">Continue</button>`
      : `<button class="btn btn-primary" type="submit" form="typeForm">Check</button>`;
  }
  if (step.kind === "flash") {
    if (!step.revealed) return "";
    return `<div class="grade-row">
      <button class="btn grade-again" data-action="flash-grade" data-grade="again">Again</button>
      <button class="btn grade-good" data-action="flash-grade" data-grade="good">Good</button>
      <button class="btn grade-easy" data-action="flash-grade" data-grade="easy">Easy</button>
    </div>`;
  }
  if (step.kind === "speak") {
    return `<div class="grade-row">
      <button class="btn grade-again" data-action="speak-rate" data-grade="again">Again</button>
      <button class="btn grade-good" data-action="speak-rate" data-grade="good">Got it</button>
    </div>`;
  }
  return "";
}

/* ---------- role-play ---------- */

function dialogChoiceOrder(sd, lineIndex) {
  if (!sd.orders) sd.orders = {};
  if (!sd.orders[lineIndex]) {
    sd.orders[lineIndex] = shuffle([0, 1, 2].slice(0, sd.dlg.lines[lineIndex].options.length));
  }
  return sd.orders[lineIndex];
}

function dialogHtml() {
  const sd = session.dialog;
  const d = sd.dlg;
  const L = window.LANGUAGES[session.lang];
  const progress = d.lines.length ? sd.shown / d.lines.length : 0;
  const label = `${Math.min(sd.turnsDone + (sd.done ? 0 : 1), sd.totalTurns)}/${sd.totalTurns}`;
  const lines = d.lines.slice(0, sd.shown);
  const turnIndex = sd.shown < d.lines.length && d.lines[sd.shown].you ? sd.shown : -1;

  return `<section class="session ${session.entering ? "first-run" : ""}" role="dialog" aria-modal="true" aria-label="${esc(d.title)}">
    ${sessionTop(progress, sd.done ? "Done" : label)}
    <div class="session-body" role="main">
      <div class="dialog-wrap">
        <p class="dialog-place">${esc(L.flag)} ${esc(d.place)}</p>
        <div class="chat">
          ${lines.map((line, i) => bubbleHtml(line, i, sd)).join("")}
        </div>
        ${turnIndex >= 0 ? turnHtml(d.lines[turnIndex], turnIndex, sd) : ""}
        ${
          sd.feedback
            ? `<div class="feedback ${sd.feedback.good ? "good" : "bad"}" role="status" style="margin-top:12px">
                ${svg(sd.feedback.good ? "check" : "x")}<span>${esc(sd.feedback.text)}</span>
              </div>`
            : ""
        }
      </div>
    </div>
  </section>`;
}

function bubbleHtml(line, i, sd) {
  if (line.you) {
    const picked = sd.picked[i];
    const opt = picked || line.options[line.answer];
    if (!opt) return "";
    return `<div class="bubble-row you">
      <div class="bubble">${esc(opt.text)}<span class="bubble-en">${esc(opt.en)}</span></div>
    </div>`;
  }
  const initial = (line.speaker || "?").slice(0, 1).toUpperCase();
  return `<div class="bubble-row">
    <span class="avatar" aria-hidden="true">${esc(initial)}</span>
    <div class="bubble">${esc(line.text)}<span class="bubble-en">${esc(line.en)}</span>
      <button class="bubble-play" data-action="play" data-text="${esc(line.text)}">${svg("speaker")} Listen</button>
    </div>
  </div>`;
}

function turnHtml(line, lineIndex, sd) {
  const order = dialogChoiceOrder(sd, lineIndex);
  return `<div class="turn-block">
    <p class="turn-kicker">Your turn</p>
    <p class="turn-prompt">${esc(line.prompt)}</p>
    <div class="choices">
      ${order
        .map((optIndex) => {
          const opt = line.options[optIndex];
          const isWrong = sd.wrongPicks && sd.wrongPicks.has(optIndex);
          return `<button class="choice ${isWrong ? "wrong dim" : ""}" data-action="dialog-choice" data-opt="${optIndex}" ${isWrong || sd.waiting ? "disabled" : ""}>
            ${esc(opt.text)}<span class="choice-en">${esc(opt.en)}</span>
          </button>`;
        })
        .join("")}
    </div>
  </div>`;
}

/* ---------- summary ---------- */

function summaryHtml() {
  const isDialog = session.kind === "dialog";
  const graded = session.graded ? session.graded.size : 0;
  const turns = isDialog ? session.dialog.turnsDone : 0;
  const attempts = session.attempts || 0;
  const correct = session.correct || 0;
  const accuracy = attempts ? Math.round((correct / attempts) * 100) : 100;
  const xp = Math.max(0, (state.xp[session.lang] || 0) - session.xpStart);
  const minutes = Math.max(1, Math.round((Date.now() - session.started) / 60000));
  const L = window.LANGUAGES[session.lang];

  const isVocab = session.kind === "vocab";
  const noun = isVocab ? "word" : "phrase";
  const subtitle = isDialog
    ? `You held your own in “${session.title}”. That's the whole point of a phrasebook — using it.`
    : `${graded} ${noun}${graded === 1 ? "" : "s"} reviewed and rescheduled. Your next reviews are spaced out to catch you just before you forget.`;

  return `<section class="session ${session.entering ? "first-run" : ""}" role="dialog" aria-modal="true" aria-label="Session complete">
    <div class="session-top">
      <button class="session-close" data-action="session-done" aria-label="Close summary">${svg("x")}</button>
      <div class="session-track" aria-hidden="true"><span style="width:100%"></span></div>
      <span class="session-count">Done</span>
    </div>
    <div class="session-body" role="main">
      <div class="summary-wrap">
        <div class="summary-badge">${svg("check")}</div>
        <h2 class="summary-title">${isDialog ? "Scene complete" : "Session complete"}</h2>
        <p class="summary-sub">${subtitle}</p>
        <div class="summary-stats">
          <div class="summary-stat"><b>${isDialog ? turns : graded}</b><span>${isDialog ? "Turns" : isVocab ? "Words" : "Phrases"}</span></div>
          <div class="summary-stat"><b>${accuracy}%</b><span>Accuracy</span></div>
          <div class="summary-stat"><b>+${xp}</b><span>XP</span></div>
        </div>
        <p class="summary-note">${isDialog ? `${L.flag} Role-play keeps fluency warm. Try the same scene tomorrow without reading the English.` : `About ${minutes} minute${minutes === 1 ? "" : "s"} of ${esc(L.englishName)}. Short and daily beats long and rare.`}</p>
      </div>
    </div>
    <div class="session-foot">
      <button class="btn btn-primary" data-action="session-done">Done</button>
      <button class="btn btn-quiet" style="width:100%;margin-top:2px" data-action="session-again">Practice more</button>
    </div>
  </section>`;
}

/* ---------- progression ---------- */

function nextStep() {
  if (!session) return;
  if (session.index + 1 >= session.steps.length) {
    finishSession();
    return;
  }
  session.index += 1;
  render();
  setTimeout(autoSpeakCurrent, 260);
}

function answerListen(index) {
  const step = currentStep();
  if (!session || !step || step.kind !== "listen" || step.answered) return;
  if (!step.options || index < 0 || index >= step.options.length) return;
  const correct = index === step.correctIndex;
  step.answered = true;
  step.picked = index;
  logAnswer(step.phrase, correct);

  if (session.kind === "listening") {
    gradeCard(step.phrase, correct ? "good" : "again");
  } else if (session.kind === "daily" || session.kind === "unit" || session.kind === "vocab") {
    if (!session.newIds.includes(step.phrase.id)) {
      gradeCard(step.phrase, correct ? "good" : "again");
    }
  }
  render();
}

function captureTypeDraft() {
  const input = document.getElementById("typeInput");
  const step = currentStep();
  if (input && step) step.draft = input.value;
}

function handleTypeSubmit(value) {
  const step = currentStep();
  if (!session || !step || step.kind !== "type" || step.answered) return;
  const typed = String(value || "");
  step.draft = typed;
  const correct = checkTyped(step.phrase, typed);
  step.answered = true;
  step.typeCorrect = correct;
  step.skipped = false;
  logAnswer(step.phrase, correct);

  gradeCard(step.phrase, correct ? "good" : "again");
  render();
}

function skipType() {
  const step = currentStep();
  if (!session || !step || step.kind !== "type" || step.answered) return;
  step.answered = true;
  step.typeCorrect = false;
  step.skipped = true;
  step.draft = "";
  logAnswer(step.phrase, false);
  gradeCard(step.phrase, "again");
  render();
}

function rateFlash(grade) {
  const step = currentStep();
  if (!session || !step || step.kind !== "flash" || step.rated) return;
  step.rated = true;
  logAnswer(step.phrase, grade !== "again");
  gradeCard(step.phrase, grade);
  nextStep();
}

function finishSpeak(grade) {
  const step = currentStep();
  if (!session || !step || step.kind !== "speak" || step.rated) return;
  step.rated = true;
  logAnswer(step.phrase, grade !== "again");
  gradeCard(step.phrase, grade);
  nextStep();
}

function speechCtor() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function startSpeechCheck() {
  const step = currentStep();
  if (!session || !step || step.kind !== "speak") return;
  const Ctor = speechCtor();
  if (!Ctor) {
    showToast("Speech scoring isn't available here — rate yourself below.");
    return;
  }
  try {
    const rec = new Ctor();
    rec.lang = window.LANGUAGES[session.lang].locale;
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    step.listening = true;
    render();
    rec.onresult = (event) => {
      const text = event.results && event.results[0] && event.results[0][0] ? event.results[0][0].transcript : "";
      step.listening = false;
      step.speech = { text, score: tokenOverlap(text, step.phrase.target) };
      render();
    };
    rec.onerror = () => {
      step.listening = false;
      render();
      showToast("I couldn't hear that. Try again, or just rate yourself.");
    };
    rec.onend = () => {
      if (step.listening) {
        step.listening = false;
        render();
      }
    };
    rec.start();
  } catch (err) {
    step.listening = false;
    render();
    showToast("The mic didn't start. You can still rate yourself.");
  }
}

/* ---------- role-play logic ---------- */

function chooseDialog(optionIndex) {
  const sd = session && session.dialog;
  if (!session || !sd || sd.waiting || sd.done) return;
  const lineIndex = sd.shown;
  const line = sd.dlg.lines[lineIndex];
  if (!line || !line.you) return;
  const option = line.options[optionIndex];
  if (!option) return;
  const correct = optionIndex === line.answer;
  logAnswer({ lang: session.lang }, correct);

  if (correct) {
    sd.picked[lineIndex] = option;
    sd.turnsDone += 1;
    if ((sd.wrongThisTurn || 0) === 0) sd.firstTryCorrect += 1;
    sd.feedback = { good: true, text: "Exactly — that's what a local would say." };
    sd.waiting = true;
    render();
    setTimeout(() => {
      if (!session || session.dialog !== sd) return;
      sd.shown = lineIndex + 1;
      advanceDialog(session);
      sd.wrongPicks = new Set();
      sd.wrongThisTurn = 0;
      sd.feedback = null;
      sd.waiting = false;
      if (sd.shown >= sd.dlg.lines.length) {
        sd.done = true;
        render();
        setTimeout(() => {
          if (session && session.dialog === sd) finishSession();
        }, 500);
      } else {
        render();
        setTimeout(autoSpeakCurrent, 220);
      }
    }, 750);
  } else {
    sd.wrongThisTurn = (sd.wrongThisTurn || 0) + 1;
    if (!sd.wrongPicks) sd.wrongPicks = new Set();
    sd.wrongPicks.add(optionIndex);
    sd.feedback = { good: false, text: `Not quite — “${option.en}” means something else. Try another reply.` };
    render();
  }
}

/* ---------- actions ---------- */

document.addEventListener("click", (event) => {
  const el = event.target.closest("[data-action]");
  if (!el) return;
  const action = el.dataset.action;

  switch (action) {
    case "brand-home":
      state.tab = "today";
      state.route = null;
      render();
      window.scrollTo({ top: 0 });
      break;

    case "switch-lang":
      if (el.dataset.lang && window.LANGUAGES[el.dataset.lang]) {
        state.lang = el.dataset.lang;
        state.route = null;
        vocabQuery = "";
        saveState();
        render();
      }
      break;

    case "go-tab":
      state.tab = el.dataset.tab || "today";
      state.route = null;
      render();
      window.scrollTo({ top: 0 });
      break;

    case "open-unit":
      state.tab = "learn";
      state.route = { name: "unit", unitId: el.dataset.unit };
      render();
      window.scrollTo({ top: 0 });
      break;

    case "back-learn":
      state.route = null;
      state.tab = "learn";
      render();
      window.scrollTo({ top: 0 });
      break;

    case "open-vocab":
      state.tab = "learn";
      state.route = { name: "vocab" };
      render();
      window.scrollTo({ top: 0 });
      break;

    case "open-vocab-set":
      state.tab = "learn";
      state.route = { name: "vocab-set", setId: el.dataset.set };
      render();
      window.scrollTo({ top: 0 });
      break;

    case "back-vocab":
      state.route = { name: "vocab" };
      render();
      window.scrollTo({ top: 0 });
      break;

    case "start-vocab":
      startSession(buildVocabSession(el.dataset.set || null));
      break;

    case "start-vocab-all":
      startSession(buildVocabSession(null));
      break;

    case "clear-vocab-search":
      vocabQuery = "";
      render();
      break;

    case "toggle-phrase": {
      const id = el.dataset.id;
      if (expandedPhrases.has(id)) expandedPhrases.delete(id);
      else expandedPhrases.add(id);
      render();
      break;
    }

    case "start-daily":
      startSession(buildDailySession());
      break;

    case "start-unit":
      startSession(buildUnitSession(el.dataset.unit));
      break;

    case "start-mode":
      startSession(buildQuickSession(el.dataset.mode));
      break;

    case "open-roleplays":
      sheet = { type: "roleplays" };
      render();
      break;

    case "start-dialog":
      sheet = null;
      startSession(buildDialogSession(el.dataset.dialog));
      break;

    case "play": {
      speakText(el.dataset.text, state.lang, { rate: el.dataset.rate ? Number(el.dataset.rate) : undefined });
      pulse(el);
      break;
    }

    case "close-session":
      closeSession();
      break;

    case "session-done":
      closeSession(true);
      break;

    case "session-again":
      restartSession();
      break;

    case "step-next":
      nextStep();
      break;

    case "answer-listen":
      answerListen(Number(el.dataset.index));
      break;

    case "type-hint": {
      captureTypeDraft();
      const step = currentStep();
      if (step) step.hintUsed = true;
      render();
      break;
    }

    case "type-bank": {
      captureTypeDraft();
      const step = currentStep();
      if (step) step.showBank = !step.showBank;
      render();
      break;
    }

    case "type-skip":
      skipType();
      break;

    case "insert-word": {
      const input = document.getElementById("typeInput");
      if (input && !input.disabled) {
        const word = el.dataset.word || "";
        const current = input.value;
        input.value = current ? `${current} ${word}` : word;
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
      }
      break;
    }

    case "reveal-flash": {
      const step = currentStep();
      if (step) step.revealed = true;
      render();
      break;
    }

    case "flash-grade":
      rateFlash(el.dataset.grade);
      break;

    case "speak-mic":
      startSpeechCheck();
      break;

    case "speak-rate":
      finishSpeak(el.dataset.grade);
      break;

    case "dialog-choice":
      chooseDialog(Number(el.dataset.opt));
      break;

    case "close-sheet":
      sheet = null;
      render();
      break;

    case "reset-progress":
      openResetSheet(el.dataset.lang);
      break;

    case "confirm-reset": {
      const langId = el.dataset.lang;
      Object.keys(state.progress).forEach((key) => {
        if (key.startsWith(`${langId}:`)) delete state.progress[key];
      });
      state.stats[langId] = { attempts: 0, correct: 0 };
      state.xp[langId] = 0;
      state.streak[langId] = freshStreak();
      state.activity[langId] = {};
      sheet = null;
      saveState();
      render();
      showToast(`${window.LANGUAGES[langId].name} progress reset.`);
      break;
    }

    case "toggle-setting": {
      const key = el.dataset.key;
      if (key in DEFAULTS) {
        state.settings[key] = !state.settings[key];
        saveState();
        render();
      }
      break;
    }

    case "set-goal":
      state.settings.goal = Number(el.dataset.value);
      saveState();
      render();
      break;

    case "set-rate":
      state.settings.rate = Number(el.dataset.value);
      saveState();
      render();
      break;

    case "set-theme":
      state.settings.theme = el.dataset.value;
      saveState();
      render();
      break;

    default:
      break;
  }
});

document.addEventListener("input", (event) => {
  const el = event.target;
  if (!el || el.id !== "vocabSearch") return;
  vocabQuery = el.value;
  render();
  const next = document.getElementById("vocabSearch");
  if (next) {
    next.focus();
    try {
      next.setSelectionRange(next.value.length, next.value.length);
    } catch (err) {
      /* type=search may not support selection in every browser */
    }
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-form='type']");
  if (!form) return;
  event.preventDefault();
  const data = new FormData(form);
  handleTypeSubmit(data.get("answer"));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (sheet) {
      sheet = null;
      render();
      return;
    }
    if (session) {
      closeSession();
      return;
    }
  }
  if (!session || session.finished || session.kind === "dialog") return;
  const step = currentStep();
  if (!step) return;
  if (step.kind === "listen" && !step.answered && /^[1-4]$/.test(event.key)) {
    answerListen(Number(event.key) - 1);
  }
});

/* ---------- boot ---------- */

prepareData();
loadState();
render();
