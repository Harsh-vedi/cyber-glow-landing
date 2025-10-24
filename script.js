const navbar = document.getElementById("navbar");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
