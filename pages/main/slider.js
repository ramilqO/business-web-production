var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: "auto", // Отображать только один слайд
  spaceBetween: 20, // Расстояние между слайдами
  autoplay: {
    delay: 3500, // Задержка между переходами в миллисекундах
    disableOnInteraction: false, // Автопрокрутка не отключается после взаимодействия пользователя
  },

  loop: true, // Зацикливание слайдов
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
