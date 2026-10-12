/***** MENU HAMBURGER (mobile) *****/

const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

// Ouvrir / fermer le menu au clic sur le bouton
menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    navLinks.classList.toggle("is-open", !isOpen);
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu");
});

// Fermer le menu après avoir choisi une rubrique
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    });
});
