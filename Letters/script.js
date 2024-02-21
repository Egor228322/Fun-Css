const list = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
const message = document.querySelector(".message");

message.addEventListener("mouseover", (e) => {
  const ranNum = () => Math.floor(Math.random() * 26);

  let iterations = 0;

  const interval = setInterval(() => {
    const newMessage = message.innerText
      .split("")
      .map((_, index) => {
        if (index < iterations) {
          return e.target.dataset.message[index];
        }

        return list[ranNum()];
      })
      .join("");
    message.innerText = newMessage;

    if (iterations >= 11) clearInterval(interval);

    iterations += 1 / 3;
  }, 30);

  if (iterations >= e.target.dataset.message.length) {
    clearInterval(interval);
  }
});
