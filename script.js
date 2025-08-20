const body = document.body;
const text = document.getElementById("text");
const toggleBtn = document.getElementById("toggleDark");
const toggleImage = document.getElementById("toggleImage");
const songBefore = document.getElementById("songBefore");
const songAfter = document.getElementById("songAfter");

const states = {
  light: {
    text: "Me at 9:59pm",
    img: "ja.webp",
    alt: "Party cat bago mag 10 pm",
  },
  dark: {
    text: "Me at 10:00 pm",
    img: "demver j.jpg",
    alt: "Relapse cat after 10 pm",
  },
};

// Load preference
if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark");
  applyState("dark");
} else {
  applyState("light");
}

toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");
  const mode = isDark ? "dark" : "light";
  applyState(mode);
  localStorage.setItem("mode", mode);
});

function applyState(mode) {
  text.textContent = states[mode].text;
  toggleImage.src = states[mode].img;
  toggleImage.alt = states[mode].alt;

  if (mode === "light") {
    songBefore.style.display = "block";
    songAfter.style.display = "none";
    songAfter.pause();
    songBefore.currentTime = 0;
    songBefore.play().catch(() => {}); // Attempt autoplay
  } else {
    songBefore.style.display = "none";
    songAfter.style.display = "block";
    songBefore.pause();
    songAfter.currentTime = 0;
    songAfter.play().catch(() => {}); // Attempt autoplay
  }
}
