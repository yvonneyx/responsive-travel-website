/* ============= SHOW MENU ============ */
const navMenu = document.getElementById("nav__menu"),
  navToggle = document.getElementById("nav__toggle"),
  navClose = document.getElementById("nav__close");

/* ============= MENU SHOW ============ */
/* Validate if constant exists*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* ============= MENU HIDDEN ============ */
/* Validate if constant exists*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* ============= REMOVE MENU MOBILE ============ */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav__menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ============= CHANGE BACKGROUND HEADER ============ */
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* ============= SWIPER DISCOVER ============ */
var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
});
