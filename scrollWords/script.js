const body = document.querySelector(".body");
const container = document.querySelector(".container");

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);

  const distance = Math.min(window.scrollY, 100);

  container.style.setProperty("--scroll-y", `${distance}px`);
});
