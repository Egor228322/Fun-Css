const menu = document.querySelector(".menu-container");
const container = document.querySelector(".image-container");
const burger = document.querySelector(".burger");
const X = document.querySelector(".X");
const letters = document.querySelectorAll(".letter");
const features = document.querySelectorAll(".feature");
let isOpen = false;

container.addEventListener("click", (e) => {
  const parent = e.target.closest(".btn-menu");

  if (!parent) return;

  isOpen = !isOpen;

  if (isOpen) {
    burger.style.opacity = 0;
    X.style.opacity = 1;
    container.style.height = "60%";
  } else {
    burger.style.opacity = 1;
    X.style.opacity = 0;
    container.style.height = "100%";
  }

  letters.forEach((letter) => letter.classList.toggle("open"));
  features.forEach((feature) => feature.classList.toggle("open"));
});
