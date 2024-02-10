const btnInc = document.querySelector(".increment");
const btnDec = document.querySelector(".decrement");
const counter = document.getElementsByTagName("h1");

let current = 0;

function isCurrent(node) {}

function onClick(payload) {
  current = current + payload;
  const newElement = document.createElement("h1");
  newElement.classList.add("counter");
  newElement.innerText = current;

  document.body.insertAdjacentHTML("afterbegin", newElement);
}

btnInc.addEventListener("click", onClick(1));
btnDec.addEventListener("click", onClick(-1));
