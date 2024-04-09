$(document).ready(function () {
  const mMenuBtn = $(".header__menu");
  const mMenu = $('.header__m-menu');
  mMenuBtn.on('click', function() {
    mMenu.toggleClass("active");
    $('body').toggleClass("no-scroll");
  });

  const Myswiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
      navigation: {
        nextEl: ".news__button--next",
      },
    },
  }


});
});