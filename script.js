// ============================================================
// CUSTOMIZE YOUR PAGE HERE
// Change these messages. Everything else can stay untouched.
// ============================================================

const CONFIG = {
  messageHeading: "I'm glad I saw you at Mexican",
  messageOne: "Your birthday surprise was the best.",
  messageTwo: "I hope you're doing great, smiling right now, and remembering how much good you bring into the world.",
  messageThree: "I hope you like this just because message. I just wanted you to have something that might make you smile, anytime.",
  finalMessage: "No matter how good or bad your day is, I hope you remember that you're important to me, I care about you, and I LOVE YOU SO MUCHHHH!",
  correctAnswer: "more"
};

// ============================================================
// PAGE LOGIC
// ============================================================

const intro = document.getElementById("intro");
const site = document.getElementById("site");
const openButton = document.getElementById("openButton");
const replayButton = document.getElementById("replayButton");
const heartDrop = document.getElementById("heartDrop");

document.getElementById("messageHeading").textContent = CONFIG.messageHeading;
document.getElementById("finalMessage").textContent = CONFIG.finalMessage;

const messageEls = [
  document.getElementById("messageOne"),
  document.getElementById("messageTwo"),
  document.getElementById("messageThree")
];

function typeText(el, text, speed = 26) {
  return new Promise(resolve => {
    el.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

function makeBurst(count = 65) {
  for (let i = 0; i < count; i++) {
    const dot = document.createElement("div");
    dot.className = "burst-dot";
    dot.style.left = "50%";
    dot.style.top = "50%";
    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 280;
    dot.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    dot.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 1800);
  }
}

function createPetal() {
  const petal = document.createElement("span");
  petal.className = "falling-petal";
  petal.textContent = Math.random() > .35 ? "✦" : "♡";
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.fontSize = `${10 + Math.random() * 12}px`;
  petal.style.animationDuration = `${7 + Math.random() * 8}s`;
  petal.style.setProperty("--sway", `${-100 + Math.random() * 200}px`);
  document.getElementById("petals").appendChild(petal);
  setTimeout(() => petal.remove(), 16000);
}

function createConstellation() {
  const group = document.getElementById("constellationStars");
  const path = document.getElementById("heartPath");

  const points = [
    [200, 310], [155, 270], [116, 230], [88, 185], [82, 135],
    [91, 99], [119, 82], [150, 86], [169, 112], [200, 147],
    [231, 112], [250, 86], [281, 82], [309, 99], [318, 135],
    [312, 185], [284, 230], [245, 270]
  ];

  points.forEach(([x, y], index) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", index % 3 === 0 ? "3.2" : "2.2");
    circle.classList.add("constellation-star");
    circle.style.animationDelay = `${index * 0.09}s`;
    group.appendChild(circle);
  });

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      path.classList.add("drawn");
      observer.disconnect();
    }
  }, { threshold: .45 });

  observer.observe(document.querySelector(".constellation-wrap"));
}

async function revealMessage() {
  const card = document.querySelector(".glass-card");

  const cardObserver = new IntersectionObserver(async entries => {
    if (!entries[0].isIntersecting) return;
    card.classList.add("revealed");
    cardObserver.disconnect();

    await new Promise(r => setTimeout(r, 500));
    await typeText(messageEls[0], CONFIG.messageOne);
    await new Promise(r => setTimeout(r, 250));
    await typeText(messageEls[1], CONFIG.messageTwo);
    await new Promise(r => setTimeout(r, 250));
    await typeText(messageEls[2], CONFIG.messageThree);
  }, { threshold: .35 });

  cardObserver.observe(card);
}

function showOpening() {
  openButton.disabled = true;
  makeBurst();
  heartDrop.classList.add("active");

  setTimeout(() => {
    intro.classList.add("hidden");
    site.classList.add("visible");
    site.setAttribute("aria-hidden", "false");
    window.scrollTo({ top: 0, behavior: "instant" });
    document.body.style.overflowY = "auto";
  }, 800);

  setTimeout(() => {
    heartDrop.classList.remove("active");
  }, 2700);
}

openButton.addEventListener("click", showOpening);

document.querySelectorAll(".answer-buttons button").forEach(button => {
  button.addEventListener("click", () => {
    const result = document.getElementById("answerResult");
    const answer = button.dataset.answer;

    if (answer === CONFIG.correctAnswer) {
      result.textContent = "That's the one. ♡ More than you know.";
    } else {
      result.textContent = "Nice try... but I'm going with “more than you know.” ♡";
    }

    result.classList.add("show");
    makeBurst(25);
  });
});

replayButton.addEventListener("click", () => {
  location.reload();
});

document.addEventListener("mousemove", event => {
  const glow = document.getElementById("cursorGlow");
  glow.style.left = `${event.clientX - 90}px`;
  glow.style.top = `${event.clientY - 90}px`;
});

createConstellation();
revealMessage();

setInterval(createPetal, 1500);

document.body.style.overflowY = "hidden";
