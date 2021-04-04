const menuBtn = document.querySelector('.header__menu-btn');

menuBtn.addEventListener('click', function (event) {
  event.preventDefault;
  menuBtn.classList.toggle('header__menu-btn--active');
});