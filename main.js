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

//Handle scrolling when tapping on the navbar menu
const contactBtn = document.querySelector(".home__contact");

function scrollToView(event) {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

navbarMenu.addEventListener("click", scrollToView);
contactBtn.addEventListener("click", scrollToView);
