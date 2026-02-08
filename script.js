const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const hearts = document.getElementById("hearts");

// NO ღილაკი რომ გაიქცეს
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// YES → სხვა ფაილზე გადასვლა
yesBtn.addEventListener("click", () => {
  window.location.href = "love.html"; // სხვა გვერდი
});

// გულების გენერაცია
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 30 + 10 + "px";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 200);
const yesBtn1 = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {
  window.location.href = "next.html";
});
