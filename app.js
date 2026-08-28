/* ================================================================
   MAIN CONFIG — customize the experience here.
   The signature color is #F9DBDB (RGB 249, 219, 219).
   ================================================================ */
const CONFIG = {
  question: "Will you go on a date with me? ❤️",
  subtitle: "I made a whole website for this, so no pressure.",
  recipientName: "",
  senderName: "",
  successTitle: "YAYYYYY ❤️",
  successMessage: "Date secured.",
  successSubtext: "See? That wasn’t so difficult 😌",
  escalationMessages: [
    "Will you go on a date with me? ❤️",
    "Are you sure? 🥺",
    "Really sure??",
    "Think carefully...",
    "Last chance 😭",
    "Why are you running from destiny?",
    "The No button is getting tired.",
    "You know there’s only one correct answer.",
    "Please 😭",
    "Fine. I’ll make this easier."
  ],
  noButtonTexts: ["No", "No?", "Wait", "Hmm", "Nice try", "Almost", "Wrong button"],
  maxChaosAttempts: 12,
  soundAvailable: true,
  celebrationIntensity: 1,
  theme: {
    signature: "#F9DBDB",
    signatureLight: "#FFF7F5",
    signatureSoft: "#FCEAEA",
    rose: "#B95F70",
    roseDeep: "#8F3F51",
    roseMuted: "#D58A98",
    ink: "#3F3032",
    mutedInk: "#725F62",
    paper: "#FFFDFB",
    border: "#EED4D5"
  }
};

const state = { attempts: 0, soundOn: false, accepted: false, lastDodge: 0, audio: null, toastTimer: null };
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const root = document.documentElement;
const card = document.querySelector(".card");
const question = document.querySelector("#question");
const subtitle = document.querySelector("#subtitle");
const recipient = document.querySelector("#recipient");
const signature = document.querySelector("#signature");
const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");
const noSlot = document.querySelector("#no-slot");
const soundToggle = document.querySelector("#sound-toggle");
const toast = document.querySelector("#toast");
const celebration = document.querySelector("#celebration");

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
  question.textContent = CONFIG.question;
  subtitle.textContent = CONFIG.subtitle;
  document.querySelector("#success-title").textContent = CONFIG.successTitle;
  document.querySelector("#success-message").textContent = CONFIG.successMessage;
  document.querySelector("#success-subtext").textContent = CONFIG.successSubtext;
  if (CONFIG.recipientName) { recipient.hidden = false; recipient.textContent = `For ${CONFIG.recipientName}, with excellent timing.`; }
  if (CONFIG.senderName) { signature.hidden = false; signature.textContent = `Made with unreasonable effort by ${CONFIG.senderName}`; }
  if (!CONFIG.soundAvailable) soundToggle.hidden = true;
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

function placeAtSlot() {
  const slot = noSlot.getBoundingClientRect();
  setNoPosition(slot.left, slot.top, true);
}

function findSafePosition() {
  const edge = Math.max(14, Math.min(28, innerWidth * .035));
  const buttonRect = noButton.getBoundingClientRect();
  const width = buttonRect.width || 126;
  const height = buttonRect.height || 54;
  const maxX = Math.max(edge, innerWidth - width - edge);
  const maxY = Math.max(edge, innerHeight - height - edge);
  const protectedElements = [question, yesButton, soundToggle, subtitle].filter(el => el && !el.hidden);
  const protectedRects = protectedElements.map(el => rectWithMargin(el, 18));
  const current = noButton.getBoundingClientRect();
  let best = { x: edge, y: maxY, score: -Infinity };

  for (let i = 0; i < 80; i += 1) {
    const x = edge + Math.random() * Math.max(0, maxX - edge);
    const y = edge + Math.random() * Math.max(0, maxY - edge);
    const candidate = { left: x, top: y, right: x + width, bottom: y + height };
    if (protectedRects.some(rect => overlaps(candidate, rect))) continue;
    const distance = Math.hypot(x - current.left, y - current.top);
    const centerPenalty = Math.max(0, 130 - Math.hypot(x + width / 2 - innerWidth / 2, y + height / 2 - innerHeight / 2));
    const score = distance - centerPenalty;
    if (score > best.score) best = { x, y, score };
  }
  return best;
}

function showToast(message) {
  clearTimeout(state.toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  state.toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function updateChaos() {
  const chaos = Math.min(state.attempts / CONFIG.maxChaosAttempts, 1);
  const yesScale = 1 + chaos * (innerWidth < 500 ? .6 : 1.05);
  const noScale = Math.max(.48, 1 - chaos * .5);
  root.style.setProperty("--yes-scale", yesScale.toFixed(2));
  root.style.setProperty("--no-scale", noScale.toFixed(2));
  noButton.style.setProperty("--no-speed", `${Math.max(115, 270 - state.attempts * 11)}ms`);
  const messageIndex = Math.min(state.attempts, CONFIG.escalationMessages.length - 1);
  if (state.attempts === 1 || state.attempts % 2 === 0) question.textContent = CONFIG.escalationMessages[messageIndex];
  if (state.attempts > 1) noButton.textContent = CONFIG.noButtonTexts[state.attempts % CONFIG.noButtonTexts.length];
  if (state.attempts === 4) showToast("Bro really tried clicking No 💀");
  if (state.attempts === 7) showToast("Persistence: impressive. Judgment: questionable.");
  if (state.attempts === 10) showToast("This is now a Yes-button appreciation page.");
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

function monitorPointer(event) {
  if (state.accepted || event.pointerType === "touch") return;
  const rect = noButton.getBoundingClientRect();
  const nearestX = Math.max(rect.left, Math.min(event.clientX, rect.right));
  const nearestY = Math.max(rect.top, Math.min(event.clientY, rect.bottom));
  const distance = Math.hypot(event.clientX - nearestX, event.clientY - nearestY);
  const threshold = Math.min(120, 70 + state.attempts * 4);
  if (distance < threshold) dodgeNo(event);
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

function playDodgeSound() { tone(330 + Math.min(state.attempts, 10) * 25, .08, .018, 0, "triangle"); }
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
  const confettiCount = reduceMotion.matches ? 10 : Math.round(70 * intensity);
  const heartCount = reduceMotion.matches ? 4 : Math.round(18 * intensity);
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
  setTimeout(() => celebration.replaceChildren(), 5000);
}

function acceptDate() {
  if (state.accepted) return;
  state.accepted = true;
  noButton.hidden = true;
  clearTimeout(state.toastTimer);
  toast.classList.remove("show");
  toast.textContent = "";
  card.classList.add("is-success");
  document.querySelector("#question-state").setAttribute("aria-hidden", "true");
  document.querySelector("#success-state").setAttribute("aria-hidden", "false");
  card.setAttribute("aria-labelledby", "success-title");
  document.title = "Date secured ❤️";
  playSuccessSound();
  launchCelebration();
  setTimeout(() => document.querySelector("#success-title").focus(), 50);
}

function handleResize() {
  clearTimeout(handleResize.timer);
  handleResize.timer = setTimeout(() => {
    if (state.accepted) return;
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

