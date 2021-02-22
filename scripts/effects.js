// Collapsing responseive navbar on click
const navLinks = document.querySelectorAll(".navbar-collapse .nav-link")
const navbar = document.querySelector(".navbar-collapse");
const navbarCollapse = new bootstrap.Collapse(navbar, {
  toggle: false
});

navLinks.forEach(link => link.addEventListener("click", () => {
  if (navbar.classList.contains("show")) {
    navbarCollapse.toggle();
  }
}));
