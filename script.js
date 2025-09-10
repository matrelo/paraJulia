const button = document.getElementById("showMessage");
const surpriseMessage = document.getElementById("surpriseMessage");
const loveSong = document.getElementById("loveSong");
const fotosContainer = document.getElementById("fotosContainer");

button.addEventListener("click", () => {
  // Mostra a mensagem
  surpriseMessage.classList.toggle("hidden");

  // Mostra as fotos
  if (fotosContainer.classList.toggle("hidden"));

  // Toca a música
  if (loveSong.paused) {
    loveSong.play();
  }

  // Corações animados
  createHearts(100);
});

function createHearts(count) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 5) + "s";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}
