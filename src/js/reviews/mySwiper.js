import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { refs } from './refs';
import { updStatusArrow } from '../common/status-arrow';

export function onMySwiper() {
  const swiper = new Swiper('.js-swiper__reviews', {
    modules: [Navigation, Pagination, Keyboard],
    direction: 'horizontal',

    slidesPerView: 4,

    simulateTouch: true,

    spaceBetween: 16,

    speed: 1000,

    navigation: {
      nextEl: '.btn-right-js',
      prevEl: '.btn-left-js',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  });

  updStatusArrow(swiper, refs.btnPrev, refs.btnNext);
  swiper.on('reachBeginning slideChange reachEnd', () =>
    updStatusArrow(swiper, refs.btnPrev, refs.btnNext)
  );
}
