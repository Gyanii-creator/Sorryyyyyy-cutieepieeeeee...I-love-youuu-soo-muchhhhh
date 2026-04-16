setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const emojis = ["💖","❤️","💕","💘","💗","💓"];
  heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 20) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);
