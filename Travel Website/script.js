const menuBtn = document.querySelector(".menubtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
