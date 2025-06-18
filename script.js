
const questions = [
  "Do you enjoy living near water?",
  "Would you prefer owning land over a high-rise?",
  "Do you garden or want a long growing season?",
  "Is low crime important to you?",
  "Do you like having 4 distinct seasons?",
  "Is access to a major airport important?",
  "Would you rather be near a small town or a big city?",
  "Do you want a place with low cost of land?",
  "Do you enjoy fishing?",
  "Do you enjoy hiking?",
  "Do you enjoy boating or sailing?",
  "Do you prefer freshwater or saltwater nearby?",
  "Would you enjoy a coastal climate?",
  "Is proximity to an ocean a priority?",
  "Would you like a drier climate?",
  "Do you enjoy mild winters?",
  "Is walkability important to you?",
  "Do you want legal recreational marijuana?",
  "Is proximity to a national park appealing?",
  "Would you prefer a liberal or conservative-leaning area?",
  "Do you care about having a strong local job market?",
  "Are affordable housing prices a priority?",
  "Do you want to live somewhere with minimal traffic?",
  "Do you prefer urban or rural settings?",
  "Do you care about low property taxes?",
  "Is having a nearby lake important?",
  "Would you like to live in a forested area?",
  "Are you okay with frequent rainfall?",
  "Do you want to avoid snowy winters?",
  "Would you enjoy living in a college town?"
];

let current = 0;
let score = 0;

function answer(value) {
  score += value;
  current++;
  if (current >= questions.length) {
    document.getElementById("question-box").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("city-result").textContent =
      score === questions.length * 3
        ? "You are the Supreme Average Human. Your ideal home is Midville, USA. Beige everything. Medium roast coffee only."
        : "Based on your answers, we recommend: Asheville, NC, Bend, OR, or Burlington, VT (within a 20-mile radius).";
  } else {
    document.getElementById("question").textContent = questions[current];
  }
}

function toggleMusic() {
  if (!window.music) {
    window.music = new Audio("https://files.catbox.moe/8hfqgj.mp3");
    window.music.loop = true;
    window.music.volume = 0.2;
    window.music.play();
  } else {
    if (window.music.paused) {
      window.music.play();
    } else {
      window.music.pause();
    }
  }
}

document.getElementById("question").textContent = questions[0];
