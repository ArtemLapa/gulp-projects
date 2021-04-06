const menuBtn = document.querySelector('.header__menu-btn'),
  navMenuWrapper = document.querySelector('.header__navigation-menu-wrapper');

menuBtn.addEventListener('click', function (event) {
  event.preventDefault;
  menuBtn.classList.toggle('header__menu-btn--active');
  navMenuWrapper.classList.toggle('header__navigation-menu-wrapper--active');
});

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  direction: 'horizontal',
  loop: true,
  arrows: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
      // slidesPerGroup: 1,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 70,
    }
  }
});