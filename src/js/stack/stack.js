import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const stackList = document.querySelector('.swiper-button');

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    // when window width is >= 320px
    375: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
});

stackList.addEventListener('click', e => {
  swiper.slideNext(300, false);
});
