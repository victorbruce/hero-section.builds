const dropDownMenu = () => {
  const hamburger = document.querySelector(".navbar__hamburger");
  const menu = document.querySelector(".navbar__menu");
  const links = document.querySelectorAll(".navbar__menu-link");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("navbar__menu-active");

    // toggle hamburger
    hamburger.classList.toggle("navbar__hamburger-toggle");

    // animate links
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `menuLinkFade .5s ease-in forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};

dropDownMenu();
