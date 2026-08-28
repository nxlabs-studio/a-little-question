/* ======================================================================
   MAIN CONFIG — V2 relationship story and theme live here.
   Signature color: #F9DBDB (RGB 249, 219, 219).
   ====================================================================== */
const CONFIG = {
  recipient: "WenWen",
  sender: "Baby",
  opening: {
    eyebrow: "A tiny question",
    question: "Will you go on a date with me?",
    subtitle: "I made you something small.",
    finePrint: "No terms, conditions, or purchase proposals. Yet."
  },
  success: {
    title: "PROPOSAL APPROVED ❤️",
    message: "Date secured.",
    subtext: "Management made the correct decision.",
    gratitude: "For cleaning my messy AF room, folding my clothes, and leaving them on the speaker because apparently putting them into the wardrobe is still my responsibility.",
    temper: "Temper?",
    future: "Let's work for Porsche of our life. 🩷💜"
  },
  storyStages: [
    { attempt: 1, question: "Will you go on a date with me?", subtitle: "The No button has chosen violence.", toast: "Come catch me, bij" },
    { attempt: 2, eyebrow: "Baby is asking nicely", question: "Ennnnnnn 🥺", subtitle: "Cannot meh?", eyes: "plead" },
    { attempt: 3, question: "Cannot meh?", subtitle: "This is a very reasonable proposal, WenWen.", eyes: "plead", toast: "Baby has activated pleading mode." },
    { attempt: 4, eyebrow: "Visual feedback detected", question: "WenWen...", subtitle: "Don't give me that bombastic side-eye.", eyes: "side-eye-wink", finePrint: "That look normally means: no more whatever Baby currently wants." },
    {
      attempt: 5, eyebrow: "Proposal portal", question: "Lady Boss, please review.", subtitle: "An unnecessarily formal request has been submitted.",
      yesLabel: "APPROVE", noLabel: "REJECT",
      story: { type: "proposal", label: "DATE PROPOSAL", status: "Pending Approval", fields: [["Submitted by", "Baby"], ["Reviewer", "Lady Boss"]] }
    },
    {
      attempt: 6, eyebrow: "Supporting documents", question: "Baby has attached assurances.", subtitle: "Please note the carefully selected wording.",
      yesLabel: "APPROVE", noLabel: "REJECT",
      story: { type: "checklist", label: "COMPLIANCE DECLARATION", title: "For the duration of this date:", items: ["No new racket", "No new diecast", "No new LEGO", "No new game"], terms: "Terms and conditions subject to change." }
    },
    {
      attempt: 7, eyebrow: "Historical precedent", question: "Management has approved worse.", subtitle: "Previous questionable request located.",
      yesLabel: "APPROVE", noLabel: "REJECT", toast: "⚠️ Rejection functionality is currently unavailable.",
      story: { type: "history", label: "PREVIOUS PROPOSAL HISTORY", title: "24/8 — Birthday Night Badminton", status: "Approved ✓", caption: "Management has demonstrated historical willingness to approve questionable requests." }
    },
    {
      attempt: 8, eyebrow: "Formal appeal", question: "Lady Boss has threatened a proposal ban.", subtitle: "Baby would like to formally appeal.",
      yesLabel: "Accept Appeal", noLabel: "Ban Baby", toast: "Please contact Baby for technical support.",
      story: { type: "warning", label: "APPEAL CASE #BABY-001", title: "Future proposals require adequate house space.", caption: "Reason supplied: get a house first so we have space to customise." }
    },
    {
      attempt: 9, eyebrow: "Relationship database", question: "Checking historical fairness...", subtitle: "This may take 1000+ days.",
      yesLabel: "Approve Baby", noLabel: "Still No",
      story: { type: "loading", label: "RETRIEVING RELATIONSHIP RECORDS", title: "Searching outstanding requests" }
    },
    {
      attempt: 10, eyebrow: "Outstanding request found", question: "And you're rejecting THIS proposal too??? 😭", subtitle: "The database remembers everything.",
      yesLabel: "Approve Baby", noLabel: "Appeal",
      story: { type: "record", label: "RELATIONSHIP REQUEST #COOK-001", rows: [["Request", "WenWen cook for Baby"], ["Waiting period", "1000+ days"], ["Status", "Eventually fulfilled ✓"]] }
    },
    {
      attempt: 11, eyebrow: "Case review complete", question: "Baby waited 1000+ days.", subtitle: "Baby can wait. The No button cannot.",
      yesLabel: "Approve Baby", noLabel: "Request Extension",
      story: { type: "record", label: "PATIENCE AUDIT", rows: [["Cooking request", "Fulfilled ✓"], ["Date proposal", "Still pending"], ["System opinion", "Suspicious"]] }
    },
    {
      attempt: 12, eyebrow: "Identity verification", question: "Who? Which girl?", subtitle: "Mum's records appear to differ.",
      yesLabel: "Approve Baby", noLabel: "Not Me", mosquito: true, toast: "Mum has entered the chat.", delayedToast: "“Where's your mosquito?”",
      story: { type: "identity", label: "RELATIONSHIP IDENTITY RECORDS", names: ["WenWen", "Lady Boss", "老板娘", "CFO", "Final Boss"], reveal: "Mum's records: Mosquito 🦟" }
    },
    {
      attempt: 13, eyebrow: "Compatibility warning", question: "Environmental inspection failed.", subtitle: "One unresolved disagreement remains.",
      yesLabel: "Override Warning", noLabel: "Fail Inspection",
      story: { type: "desk", label: "SYSTEM COMPATIBILITY REPORT", rows: [["Baby", "Desk is okay."], ["WenWen", "HELL NO"]] }
    },
    {
      attempt: 14, eyebrow: "Mutual roasting enabled", question: "Reasons WenWen should reject:", subtitle: "The system is legally required to be balanced.",
      yesLabel: "Review Benefits", noLabel: "Valid Points",
      story: { type: "roast", label: "BABY RISK DISCLOSURE", items: ["Desk condition: unacceptable", "Will explain Marvel and random animals unprompted", "Cannot pass LEGO stores normally", "Hair volume: under ongoing investigation"] }
    },
    {
      attempt: 15, eyebrow: "Benefits analysis", question: "Reasons WenWen should approve:", subtitle: "Calculation complete.",
      yesLabel: "Okay, Baby", noLabel: "Recalculate", eyes: "plead",
      story: { type: "baby", label: "FINAL RECOMMENDATION", title: "Baby 🥺", caption: "Spring onion removal service included with approved date." }
    },
    {
      attempt: 16, eyebrow: "Proximity alert", question: "LEGO STORE DETECTED", subtitle: "WenWen understands how this feels.",
      yesLabel: "Approve Baby", noLabel: "Save My Arm", lego: true, toast: "No escaped faster than us when coriander arrives.",
      story: { type: "lego", label: "ARM-DRAGGING SIMULATION", title: "Destination lock: LEGO store", caption: "Estimated arm status: approaching dislocation." }
    },
    {
      attempt: 17, eyebrow: "Final Boss mode", question: "WenWen, the system has decided.", subtitle: "There is now one beautifully obvious answer.",
      yesLabel: "Approve Baby", noLabel: "Tiny No", eyes: "wink",
      story: { type: "final", label: "FINAL DECISION", title: "Lady Boss approval required", caption: "Both parties become dangerous when hungry. Please approve dinner promptly." }
    }
  ],
  noButtonTexts: ["No", "No?", "Wait", "Hmm", "Nice try", "Almost", "Cannot", "Aiyo"],
  maxChaosAttempts: 18,
  soundAvailable: true,
  celebrationIntensity: 1,
  calmDelay: 3000,
  theme: {
    signature: "#F9DBDB", signatureLight: "#FFF7F5", signatureSoft: "#FCEAEA",
    rose: "#B95F70", roseDeep: "#8F3F51", roseMuted: "#D58A98",
    ink: "#3F3032", mutedInk: "#725F62", paper: "#FFFDFB", border: "#EED4D5"
  }
};

const state = { attempts: 0, soundOn: false, accepted: false, lastDodge: 0, audio: null, toastTimer: null, storyTimers: [] };
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const root = document.documentElement;
const card = document.querySelector(".card");
const questionState = document.querySelector("#question-state");
const question = document.querySelector("#question");
const subtitle = document.querySelector("#subtitle");
const recipient = document.querySelector("#recipient");
const signature = document.querySelector("#signature");
const eyebrowText = document.querySelector("#eyebrow-text");
const eyes = document.querySelector("#eyes");
const storyPanel = document.querySelector("#story-panel");
const yesButton = document.querySelector("#yes-button");
const yesLabel = yesButton.querySelector("span");
const noButton = document.querySelector("#no-button");
const noSlot = document.querySelector("#no-slot");
const soundToggle = document.querySelector("#sound-toggle");
const toast = document.querySelector("#toast");
const mosquito = document.querySelector("#mosquito");
const celebration = document.querySelector("#celebration");
const sincerePhase = document.querySelector("#sincere-phase");

function applyConfig() {
  const tokens = {
    "--signature": CONFIG.theme.signature, "--signature-light": CONFIG.theme.signatureLight,
    "--signature-soft": CONFIG.theme.signatureSoft, "--rose": CONFIG.theme.rose,
    "--rose-deep": CONFIG.theme.roseDeep, "--rose-muted": CONFIG.theme.roseMuted,
    "--ink": CONFIG.theme.ink, "--muted-ink": CONFIG.theme.mutedInk,
    "--paper": CONFIG.theme.paper, "--border": CONFIG.theme.border
  };
  Object.entries(tokens).forEach(([key, value]) => root.style.setProperty(key, value));
  document.querySelector('meta[name="theme-color"]').content = CONFIG.theme.signature;
  eyebrowText.textContent = CONFIG.opening.eyebrow;
  recipient.textContent = `Hi ${CONFIG.recipient} ❤️`;
  question.textContent = CONFIG.opening.question;
  subtitle.textContent = CONFIG.opening.subtitle;
  document.querySelector("#fine-print").textContent = CONFIG.opening.finePrint;
  document.querySelector("#success-title").textContent = CONFIG.success.title;
  document.querySelector("#success-message").textContent = CONFIG.success.message;
  document.querySelector("#success-subtext").textContent = CONFIG.success.subtext;
  document.querySelector("#gratitude").textContent = CONFIG.success.gratitude;
  document.querySelector("#temper").textContent = CONFIG.success.temper;
  document.querySelector("#future-line").textContent = CONFIG.success.future;
  signature.textContent = `Always yours, ${CONFIG.sender}`;
  if (!CONFIG.soundAvailable) soundToggle.hidden = true;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
}

function renderStory(story) {
  if (!story) { storyPanel.hidden = true; storyPanel.className = "story-panel"; storyPanel.replaceChildren(); return; }
  const label = `<span class="system-label">${escapeHTML(story.label)}</span>`;
  let content = "";
  if (story.type === "proposal") {
    content = `<div class="system-header">${label}<span class="status-pill">${escapeHTML(story.status)}</span></div><div class="system-grid">${story.fields.map(([key, value]) => `<div class="system-cell"><span>${escapeHTML(key)}</span><strong>${escapeHTML(value)}</strong></div>`).join("")}</div>`;
  } else if (story.type === "checklist") {
    content = `<div class="system-header">${label}</div><p class="story-title">${escapeHTML(story.title)}</p><ul class="check-list">${story.items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul><p class="tiny-terms">${escapeHTML(story.terms)}</p>`;
  } else if (story.type === "history") {
    content = `<div class="system-header">${label}</div><div class="history-row"><strong>${escapeHTML(story.title)}</strong><span class="status-pill approved">${escapeHTML(story.status)}</span></div><p class="story-caption">${escapeHTML(story.caption)}</p>`;
  } else if (story.type === "warning") {
    content = `<div class="system-header">${label}</div><div class="warning-line">⚠ <span>${escapeHTML(story.title)}</span></div><p class="story-caption">${escapeHTML(story.caption)}</p>`;
  } else if (story.type === "loading") {
    content = `<div class="system-header">${label}</div><p class="story-title">${escapeHTML(story.title)} <span class="loading-dots" aria-hidden="true"><i></i><i></i><i></i></span></p>`;
  } else if (["record", "desk"].includes(story.type)) {
    content = `<div class="system-header">${label}</div>${story.rows.map(([key, value]) => `<div class="record-row"><span>${escapeHTML(key)}</span><strong>${escapeHTML(value)}</strong></div>`).join("")}`;
  } else if (story.type === "identity") {
    content = `<div class="system-header">${label}</div><div class="identity-stack">${story.names.map(name => `<span>${escapeHTML(name)}</span>`).join("")}</div><p class="mosquito-record">${escapeHTML(story.reveal)}</p>`;
  } else if (story.type === "roast") {
    content = `<div class="system-header">${label}</div><ul class="roast-list">${story.items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
  } else if (story.type === "lego") {
    content = `<div class="system-header">${label}</div><div class="lego-row"><span class="lego-blocks" aria-hidden="true"><i style="--tilt:-8deg"></i><i style="--tilt:4deg"></i><i style="--tilt:9deg"></i></span><div><p class="story-title">${escapeHTML(story.title)}</p><p class="story-caption">${escapeHTML(story.caption)}</p></div></div>`;
  } else {
    content = `<div class="system-header">${label}</div><p class="story-title">${escapeHTML(story.title)}</p>${story.caption ? `<p class="story-caption">${escapeHTML(story.caption)}</p>` : ""}`;
  }
  storyPanel.className = `story-panel story-${story.type}`;
  storyPanel.innerHTML = content;
  storyPanel.hidden = false;
}

function setEyes(mode = "") {
  eyes.className = "eyes";
  if (!mode) return;
  eyes.classList.add("is-visible");
  if (mode.includes("side-eye")) eyes.classList.add("is-side-eye");
  if (mode.includes("wink")) eyes.classList.add("is-wink");
  if (matchMedia("(pointer: coarse)").matches && !mode.includes("side-eye")) {
    eyes.style.setProperty("--eye-x", `${Math.sin(state.attempts) * 3}px`);
    eyes.style.setProperty("--eye-y", `${Math.cos(state.attempts) * 2}px`);
  }
}

function currentStage() { return [...CONFIG.storyStages].reverse().find(stage => state.attempts >= stage.attempt) || null; }

function queueStoryMessage(message, delay) {
  const timer = setTimeout(() => { if (!state.accepted) showToast(message); }, delay);
  state.storyTimers.push(timer);
}

function applyStage(stage, triggerEffects = true) {
  eyebrowText.textContent = stage?.eyebrow || CONFIG.opening.eyebrow;
  question.textContent = stage?.question || CONFIG.opening.question;
  subtitle.textContent = stage?.subtitle || CONFIG.opening.subtitle;
  document.querySelector("#fine-print").textContent = stage?.finePrint || CONFIG.opening.finePrint;
  yesLabel.textContent = stage?.yesLabel || "Yes";
  noButton.textContent = stage?.noLabel || (state.attempts > 1 ? CONFIG.noButtonTexts[state.attempts % CONFIG.noButtonTexts.length] : "No");
  renderStory(stage?.story);
  setEyes(stage?.eyes);
  card.classList.toggle("has-story", Boolean(stage?.story || stage?.eyes));
  if (triggerEffects && stage?.toast) showToast(stage.toast);
  if (triggerEffects && stage?.delayedToast) queueStoryMessage(stage.delayedToast, 1250);
  if (triggerEffects && stage?.mosquito) flyMosquito();
}

function rectWithMargin(element, margin = 12) {
  const r = element.getBoundingClientRect();
  return { left: r.left - margin, top: r.top - margin, right: r.right + margin, bottom: r.bottom + margin };
}
function overlaps(a, b) { return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top; }

function setNoPosition(x, y, instant = false) {
  if (instant) noButton.style.setProperty("--no-speed", "0ms");
  noButton.style.setProperty("--no-x", `${Math.round(x)}px`);
  noButton.style.setProperty("--no-y", `${Math.round(y)}px`);
  if (instant) requestAnimationFrame(() => noButton.style.removeProperty("--no-speed"));
}

function placeAtSlot() { const slot = noSlot.getBoundingClientRect(); setNoPosition(slot.left, slot.top, true); }

function findSafePosition() {
  const edge = Math.max(14, Math.min(28, innerWidth * .035));
  const buttonRect = noButton.getBoundingClientRect();
  const width = buttonRect.width || 126;
  const height = buttonRect.height || 54;
  const maxX = Math.max(edge, innerWidth - width - edge);
  const maxY = Math.max(edge, innerHeight - height - edge);
  const protectedElements = [question, subtitle, recipient, yesButton, soundToggle, storyPanel, eyes]
    .filter(element => element && !element.hidden && getComputedStyle(element).display !== "none");
  const protectedRects = protectedElements.map(element => rectWithMargin(element, 14));
  const current = noButton.getBoundingClientRect();
  let best = { x: edge, y: maxY, score: -Infinity };
  for (let i = 0; i < 100; i += 1) {
    const x = edge + Math.random() * Math.max(0, maxX - edge);
    const y = edge + Math.random() * Math.max(0, maxY - edge);
    const candidate = { left: x, top: y, right: x + width, bottom: y + height };
    if (protectedRects.some(rect => overlaps(candidate, rect))) continue;
    const distance = Math.hypot(x - current.left, y - current.top);
    const edgeBonus = Math.min(x - edge, maxX - x, y - edge, maxY - y) < 55 ? 28 : 0;
    const score = distance + edgeBonus;
    if (score > best.score) best = { x, y, score };
  }
  return best;
}

function showToast(message) {
  clearTimeout(state.toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  state.toastTimer = setTimeout(() => toast.classList.remove("show"), 2350);
}

function flyMosquito() { mosquito.classList.remove("is-flying"); void mosquito.offsetWidth; mosquito.classList.add("is-flying"); }

function updateChaos(triggerEffects = true) {
  applyStage(currentStage(), triggerEffects);
  card.classList.toggle("yes-centered", state.attempts >= 5);
  const chaos = Math.min(state.attempts / CONFIG.maxChaosAttempts, 1);
  const desiredScale = 1 + chaos * (innerWidth < 500 ? .46 : .78);
  const yesRect = yesButton.getBoundingClientRect();
  const yesCenter = (yesRect.left + yesRect.right) / 2;
  const availableHalf = Math.max(yesButton.offsetWidth / 2, Math.min(yesCenter - 24, innerWidth - yesCenter - 24));
  const fitScale = Math.max(1, (availableHalf * 2) / Math.max(yesButton.offsetWidth, 1));
  root.style.setProperty("--yes-scale", Math.min(desiredScale, fitScale).toFixed(2));
  root.style.setProperty("--no-scale", Math.max(.46, 1 - chaos * .54).toFixed(2));
  noButton.style.setProperty("--no-speed", `${Math.max(110, 270 - state.attempts * 8)}ms`);
}

function dodgeNo(event) {
  if (state.accepted) return;
  const now = performance.now();
  if (now - state.lastDodge < 210) return;
  state.lastDodge = now;
  if (event?.cancelable) event.preventDefault();
  state.attempts += 1;
  updateChaos();
  const next = findSafePosition();
  setNoPosition(next.x, next.y);
  noButton.classList.remove("is-dodging");
  void noButton.offsetWidth;
  noButton.classList.add("is-dodging");
  playDodgeSound();
}

function updateEyeDirection(event) {
  if (!eyes.classList.contains("is-visible") || eyes.classList.contains("is-side-eye") || event.pointerType === "touch") return;
  const x = Math.max(-5, Math.min(5, (event.clientX / innerWidth - .5) * 10));
  const y = Math.max(-3, Math.min(3, (event.clientY / innerHeight - .5) * 6));
  eyes.style.setProperty("--eye-x", `${x}px`);
  eyes.style.setProperty("--eye-y", `${y}px`);
}

function monitorPointer(event) {
  updateEyeDirection(event);
  if (state.accepted || event.pointerType === "touch") return;
  const rect = noButton.getBoundingClientRect();
  const nearestX = Math.max(rect.left, Math.min(event.clientX, rect.right));
  const nearestY = Math.max(rect.top, Math.min(event.clientY, rect.bottom));
  const distance = Math.hypot(event.clientX - nearestX, event.clientY - nearestY);
  if (distance < Math.min(126, 70 + state.attempts * 3.5)) dodgeNo(event);
}

function getAudioContext() {
  if (!state.audio) state.audio = new (window.AudioContext || window.webkitAudioContext)();
  return state.audio;
}

function tone(frequency, duration, volume = .025, delay = 0, type = "sine") {
  if (!state.soundOn || !CONFIG.soundAvailable) return;
  const context = getAudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type; oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0, context.currentTime + delay);
  gain.gain.linearRampToValueAtTime(volume, context.currentTime + delay + .012);
  gain.gain.exponentialRampToValueAtTime(.0001, context.currentTime + delay + duration);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start(context.currentTime + delay); oscillator.stop(context.currentTime + delay + duration + .02);
}

function playDodgeSound() { tone(330 + Math.min(state.attempts, 14) * 22, .08, .018, 0, "triangle"); }
function playSuccessSound() { [523, 659, 784, 1047].forEach((note, index) => tone(note, .35, .035, index * .09, "sine")); }

function toggleSound() {
  state.soundOn = !state.soundOn;
  soundToggle.setAttribute("aria-pressed", String(state.soundOn));
  soundToggle.setAttribute("aria-label", state.soundOn ? "Turn sound off" : "Turn sound on");
  soundToggle.querySelector(".sound-label").textContent = state.soundOn ? "Sound on" : "Sound off";
  if (state.soundOn) { getAudioContext().resume(); tone(520, .11, .018); }
}

function launchCelebration() {
  const intensity = Math.max(.4, Math.min(2, CONFIG.celebrationIntensity));
  const confettiCount = reduceMotion.matches ? 8 : Math.round(66 * intensity);
  const heartCount = reduceMotion.matches ? 3 : Math.round(16 * intensity);
  const colors = [CONFIG.theme.signature, CONFIG.theme.rose, CONFIG.theme.roseDeep, "#E8B86D", "#FFFDFB"];
  for (let i = 0; i < confettiCount; i += 1) {
    const piece = document.createElement("i"); piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`; piece.style.background = colors[i % colors.length];
    piece.style.setProperty("--drift", `${-110 + Math.random() * 220}px`);
    piece.style.setProperty("--spin", `${360 + Math.random() * 720}deg`);
    piece.style.setProperty("--fall-time", `${1.8 + Math.random() * 1.8}s`);
    piece.style.setProperty("--delay", `${Math.random() * .55}s`); celebration.appendChild(piece);
  }
  for (let i = 0; i < heartCount; i += 1) {
    const heart = document.createElement("i"); heart.className = "flying-heart";
    heart.style.left = `${3 + Math.random() * 94}%`; heart.style.setProperty("--size", `${8 + Math.random() * 16}px`);
    heart.style.setProperty("--heart-color", i % 2 ? CONFIG.theme.rose : CONFIG.theme.signature);
    heart.style.setProperty("--rise-time", `${2.4 + Math.random() * 2}s`); heart.style.setProperty("--delay", `${Math.random() * .8}s`);
    celebration.appendChild(heart);
  }
  setTimeout(() => celebration.replaceChildren(), 4900);
}

function settleIntoEnding() {
  celebration.replaceChildren();
  card.classList.add("is-calm");
  document.querySelector("#victory-phase").setAttribute("aria-hidden", "true");
  sincerePhase.setAttribute("aria-hidden", "false");
  card.setAttribute("aria-labelledby", "thank-you-title");
}

function acceptDate() {
  if (state.accepted) return;
  state.accepted = true;
  noButton.hidden = true;
  state.storyTimers.forEach(clearTimeout);
  clearTimeout(state.toastTimer);
  toast.classList.remove("show"); toast.textContent = "";
  mosquito.classList.remove("is-flying");
  card.classList.remove("has-story"); card.classList.add("is-success");
  questionState.setAttribute("aria-hidden", "true");
  document.querySelector("#success-state").setAttribute("aria-hidden", "false");
  card.setAttribute("aria-labelledby", "success-title");
  document.title = "Lady Boss approved ❤️";
  playSuccessSound(); launchCelebration();
  setTimeout(() => document.querySelector("#success-title").focus(), 50);
  setTimeout(settleIntoEnding, reduceMotion.matches ? 700 : CONFIG.calmDelay);
}

function handleResize() {
  clearTimeout(handleResize.timer);
  handleResize.timer = setTimeout(() => {
    if (state.accepted) return;
    updateChaos(false);
    if (state.attempts === 0) placeAtSlot();
    else { const next = findSafePosition(); setNoPosition(next.x, next.y, true); }
  }, 80);
}

applyConfig();
requestAnimationFrame(placeAtSlot);
window.addEventListener("pointermove", monitorPointer, { passive: false });
window.addEventListener("resize", handleResize);
window.addEventListener("orientationchange", handleResize);
noButton.addEventListener("pointerdown", dodgeNo);
noButton.addEventListener("click", dodgeNo);
noButton.addEventListener("focus", dodgeNo);
yesButton.addEventListener("click", acceptDate);
soundToggle.addEventListener("click", toggleSound);
document.querySelector("#replay-button").addEventListener("click", () => location.reload());

