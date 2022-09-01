"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Show navbar menu when it is clicked
const navbarMenu = document.querySelector(".navbar__menu");
const toggleBtn = document.querySelector(".navbar__toggle-btn");

toggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("navbar--selected");
});

// Handle scrolling when tapping on the navbar menu and "contact me" button
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }

  scrollToView(link);
});

const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", () => {
  scrollToView("#contact");
});

// Make home to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Handle click on the arrow button
arrowUp.addEventListener("click", () => {
  scrollToView("#home");
});

function scrollToView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
