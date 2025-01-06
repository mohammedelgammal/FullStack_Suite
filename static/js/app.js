const alertMessages = Array.from(document.getElementsByClassName("alert"));

setTimeout(() => {
  alertMessages.forEach((message) => {
    message.style.display = "none";
  });
}, 3000);
