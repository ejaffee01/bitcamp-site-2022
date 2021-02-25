// Collapsing responsive navbar on click
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

// Tracks Carousel
const flkty = new Flickity('.tracks-carousel', {
  wrapAround: true,
  autoPlay: 7000,
  cellAlign: 'center',
  accessibility: false,
  lazyLoad: true,
  percentPositions: true,
});
