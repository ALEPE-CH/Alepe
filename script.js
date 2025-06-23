const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = navLinks.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Fermer menu mobile quand on clique sur un lien
links.forEach(link => {
  link.addEventListener("click", () => {
    if(navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});
