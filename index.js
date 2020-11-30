const burger = document.querySelector(".burger");
const navDropDown = document.querySelector(".nav-dropdown");
const overlay = document.querySelector(".overlay");

burger.addEventListener('click', () => {
  navDropDown.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
  overlay.classList.toggle("black-overlay");
});

overlay.addEventListener('click', () => {
  navDropDown.classList.toggle("nav-active");
  overlay.classList.toggle("black-overlay");
})