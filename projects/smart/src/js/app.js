const menuBtn = document.querySelector('.header__menu-btn'),
  navMenuWrapper = document.querySelector('.header__navigation-menu-wrapper');

menuBtn.addEventListener('click', function (event) {
  event.preventDefault;
  menuBtn.classList.toggle('header__menu-btn--active');
  navMenuWrapper.classList.toggle('header__navigation-menu-wrapper--active');
});