// Calling DOM
const burgerOpen = document.querySelector(".burger-open-btn");
const burgerClose = document.querySelector(".burger-close-btn");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");

// Functions

const createElements = () => {
  const navbarBg = document.createElement("div");
  navbarBg.setAttribute("class", "navbarBg");
  body.append(navbarBg);
  navbarBg.append(navbar);

  return navbarBg;
};

const handleOpenMobileMenu = () => {
  const navbarBg = createElements();
  navbarBg.animate([{ opacity: 0 }, { opacity: 0.5 }], {
    duration: 300,
  });
  setTimeout(() => navbar.classList.remove("hidden"), 300);
};

const handleCloseMobileMenu = () => {
  const nvbg = document.querySelector(".navbarBg");
  nvbg.removeChild(navbar);
  body.removeChild(nvbg);
  navbar.classList.add("hidden");
};

// Events

burgerOpen.addEventListener("click", handleOpenMobileMenu);
burgerClose.addEventListener("click", handleCloseMobileMenu);
