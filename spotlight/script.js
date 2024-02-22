document.querySelector(".cards").addEventListener("mousemove", (e) => {
  console.log(e);
  for (let card of document.querySelectorAll(".card")) {
    const rect = card.getBoundingClientRect();
    console.log(rect);
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
});
