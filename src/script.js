// DOM Stuff
const burgerOpen = document.querySelector(".burger-open-btn");
const burgerClose = document.querySelector(".burger-close-btn");
const navbar = document.querySelector(".navbar");

// Events

burgerOpen.addEventListener("click", () => {
  if (navbar.classList.contains("hidden")) {
    navbar.classList.remove("hidden");
  }
});

burgerClose.addEventListener("click", () => {
  if (!navbar.classList.contains("hidden")) {
    navbar.classList.add("hidden");
  }
});
