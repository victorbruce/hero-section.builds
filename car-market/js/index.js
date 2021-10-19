const newSlide = () => {
  const burger = document.querySelector(".navbar__menu-burger");
  const menu = document.querySelector(".navbar__menu");
  const links = document.querySelectorAll(".navbar__menu-link");

  burger.addEventListener("click", () => {
    // toggle menu
    menu.classList.toggle("menu-active");

    burger.classList.toggle("menu-link-toggle");

    // animate links
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `menuLinkFade 0.8s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};

newSlide();
