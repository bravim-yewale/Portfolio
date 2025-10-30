// ===== MOBILE NAVBAR TOGGLE =====
const navToggle = document.createElement("div");
navToggle.classList.add("nav__toggle");
navToggle.innerHTML = `<i class="ri-menu-3-line"></i>`;
document.querySelector(".nav__bar").appendChild(navToggle);

const navLinks = document.querySelector(".nav__links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show__menu");
  navToggle.innerHTML = navLinks.classList.contains("show__menu")
    ? `<i class="ri-close-line"></i>`
    : `<i class="ri-menu-3-line"></i>`;
});

document.querySelectorAll(".nav__links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("show__menu")) {
      navLinks.classList.remove("show__menu");
      navToggle.innerHTML = `<i class="ri-menu-3-line"></i>`;
    }
  });
});

// ===== ACTIVE LINK ON SCROLL =====
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__links a[href*=${sectionId}]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__links a[href*=${sectionId}]`)
        .classList.remove("active-link");
    }
  });
});

// ===== SCROLL REVEAL EFFECT =====
const revealElements = document.querySelectorAll(".section__container, .service__card");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
