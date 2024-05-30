import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import { Navigation, Keyboard } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: '.arrow-svg',
  },
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
