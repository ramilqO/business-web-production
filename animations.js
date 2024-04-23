window.addEventListener("scroll", () => {
  const targetBlock = document.querySelector(".services__img");
  const target = document.querySelector(".services__text-wrapper");
  const targetBlockPosition = targetBlock.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (targetBlockPosition < windowHeight) {
    targetBlock.classList.add("active");
    target.classList.add("active");
  }
});

const ham = document.querySelector(".hamburger");
const menu = document.querySelector(".ham__menu");
const close = document.querySelector(".close-btn");
const hamShadow = document.querySelector(".menu-shadow");

ham.addEventListener("click", () => {
  hamShadow.classList.add("open");
  menu.classList.add("open");
  ham.style.display = "none";
  close.style.display = "flex";
});

close.addEventListener("click", () => {
  hamShadow.classList.remove("open");
  menu.classList.remove("open");
  close.style.display = "none";
  ham.style.display = "flex";
});