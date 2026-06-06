const button = document.getElementById("actionButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Nice! The starter project is ready for customization.";
});
