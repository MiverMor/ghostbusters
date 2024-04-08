$(document).ready(function () {
  const mMenuBtn = $(".header__menu");
  const mMenu = $('.header__m-menu');
  mMenuBtn.on('click', function() {
    mMenu.toggleClass("active");
    $('body').toggleClass("no-scroll");
  });
});