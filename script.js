"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

// 👉 YOU CAN PUT GIFS HERE (online or local)
const images = [
  "https://media.tenor.com/B61VWJ0QlscAAAAM/jjk-jujutsu-kaisen.gif",
  "https://giffiles.alphacoders.com/223/223109.gif",
  "https://usagif.com/wp-content/uploads/gify/2-junpei-yoshino-cries-heavily.gif",
  "https://i.pinimg.com/originals/33/20/6c/33206c7b3330d4b4e488a0ac7b1f73c8.gif",
  "https://www.icegif.com/wp-content/uploads/2024/01/icegif-281.gif",
];

// GIF when YES is clicked
const yesGif =
  "https://media.tenor.com/7C-t7hLJSqYAAAAM/bungou-stray-dogs-bsd.gif";

let noCount = 0;
let play = true;

yesButton.addEventListener("click", () => {
  titleElement.textContent = "Happy Valentine's Day, Adrii!!  Oh virtual roses for you. Ayaw na sig langi, amping permi :P";
  buttonsContainer.classList.add("hidden");
  catImg.src = yesGif;
});

noButton.addEventListener("click", () => {
  if (!play) return;

  noCount++;
  const index = Math.min(noCount - 1, images.length - 1);
  catImg.src = images[index];

  resizeYesButton();
  updateNoButtonText();

  if (noCount === images.length) play = false;
});

function resizeYesButton() {
  const size = window.getComputedStyle(yesButton).fontSize;
  yesButton.style.fontSize = `${parseFloat(size) * 1.3}px`;
}

function updateNoButtonText() {
  const messages = [
    "No",
    "Ha!?",
    "Haaaaaaaa!!?",
    "Mag langi ko!! <:",
    "AGAY AGAY!! 💔",
    "GE :P ",
  ];

  noButton.textContent =
    messages[Math.min(noCount, messages.length - 1)];
}
