const handleResponsiveHeader = () => {
  const hamburger = document.querySelector(".site-navigation__hamburger");
  const navLinks = document.querySelector(".site-navigation__links");
  const navbar = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    nextElement = navbar.nextElementSibling;

    navLinks.classList.toggle("nav-open");
    nextElement.classList.toggle("push-down");
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
};

handleResponsiveHeader();
