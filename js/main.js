$(document).ready(function () {
  const mMenuBtn = $(".header__menu");
  const mMenu = $('.header__m-menu');
  const tab = $('.tab');

  mMenuBtn.on('click', function() {
    mMenu.toggleClass("active");
    $('body').toggleClass("no-scroll");
  });

  tab.on('click', function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    
    let activeTabContent = $(this).attr("data-target");

    $(".tabs__content").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  })

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