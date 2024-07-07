const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const dropdownFooter = document.querySelector(".dropdown-footer");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    dropdownFooter.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    dropdownFooter.classList.remove("active");
}));
