// AP Web Designer - mobile menu, back-to-top, active link highlight

document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menuToggle");
  var navbar = document.getElementById("navbar");
  var topBtn = document.getElementById("topBtn");

  // Mobile hamburger menu toggle
  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function () {
      var isOpen = navbar.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    // Close menu after tapping a link (mobile)
    navbar.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });

    // Close menu when tapping outside of it
    document.addEventListener("click", function (e) {
      if (
        navbar.classList.contains("active") &&
        !navbar.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        navbar.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    });
  }

  // Back-to-top button: show after scrolling, scroll smoothly to top
  if (topBtn) {
    topBtn.style.display = "none";

    window.addEventListener("scroll", function () {
      topBtn.style.display = window.scrollY > 400 ? "flex" : "none";
    });

    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
