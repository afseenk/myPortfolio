const helloButton = document.getElementById("helloButton");
const message = document.getElementById("message");

helloButton.addEventListener("click", function () {
  message.textContent = "Hello! Welcome to my portfolio page.";
});

const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.querySelector(".theme-label");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeButton.classList.add("rotate");

  setTimeout(() => {
    themeButton.classList.remove("rotate");
  }, 500);

  if (document.body.classList.contains("dark")) {
    themeIcon.textContent = "🌙";
    themeLabel.textContent = "click sun to go to light mode";
  } else {
    themeIcon.textContent = "☀️";
    themeLabel.textContent = "click moon to go to dark mode";
  }
});

