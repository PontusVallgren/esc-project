// Calling DOM
const burgerOpen = document.querySelector(".burger-open-btn");
const burgerClose = document.querySelector(".burger-close-btn");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");

// Events

burgerOpen.addEventListener("click", () => {
  if (navbar.classList.contains("hidden")) {
    setTimeout(() => navbar.classList.remove("hidden"), 300);
    body.classList.toggle("active");
  }
});

burgerClose.addEventListener("click", () => {
  if (!navbar.classList.contains("hidden")) {
    navbar.classList.add("hidden");
    body.classList.toggle("active");
  }
});
