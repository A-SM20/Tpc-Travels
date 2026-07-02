const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
  });
}

if (typeof ScrollReveal !== "undefined") {
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000
  };

  ScrollReveal().reveal(".header__image img", { ...scrollRevealOption, origin: "right", interval: 500 });
  ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 1500 });
  ScrollReveal().reveal(".header__content .section__description", { ...scrollRevealOption, delay: 2000 });
  ScrollReveal().reveal(".choose__image img", { ...scrollRevealOption, origin: "left" });
  ScrollReveal().reveal(".choose__content .section__subheader", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".choose__content .section__header", { ...scrollRevealOption, delay: 1000 });
  ScrollReveal().reveal(".choose__list li", { ...scrollRevealOption, delay: 1500, interval: 500 });
}
