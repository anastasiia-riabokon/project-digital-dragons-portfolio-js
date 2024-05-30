import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const stackList = document.querySelector('.stack-list');
const nextBtn = document.querySelector('.js-arrow-wrap');

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  breakpoints: {
    375: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

nextBtn.addEventListener('click', e => {
  swiper.slideNext(300, false);
});
