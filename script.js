const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const glow = document.querySelector(".cursor-glow");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => navMenu.classList.remove("show"));
});

window.addEventListener("mousemove", (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});
