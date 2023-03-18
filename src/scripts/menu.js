let isMenuOpen = false;

const button = document.querySelector("#menu-button");
const iconClosed = document.querySelector("#menu-button__icon--closed");
const iconOpen = document.querySelector("#menu-button__icon--open");
const links = document.querySelector(".links-holder");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

function openMenu() {
  isMenuOpen = true;
  iconClosed.classList.remove("visible");
  iconOpen.classList.add("visible");
  links.classList.add("visible");
  main?.classList.add("hidden");
  footer?.classList.add("hidden");
}

function closeMenu() {
  isMenuOpen = false;
  iconClosed.classList.add("visible");
  iconOpen.classList.remove("visible");
  links.classList.remove("visible");
  main?.classList.remove("hidden");
  footer?.classList.remove("hidden");
}

button.addEventListener("click", () => {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

addEventListener("resize", () => {
  if (window.innerWidth > 640) {
    closeMenu();
  }
});
