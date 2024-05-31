import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { refs } from './refs';

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
      375: {
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

  updateButtons(swiper);
  swiper.on('reachBeginning slideChange reachEnd', () => updateButtons(swiper));
}

function updateButtons(swiper) {
  const { isBeginning, isEnd } = swiper;
  if (isBeginning) {
    refs.btnPrev.classList.remove('active');
  } else {
    refs.btnPrev.classList.add('active');
  }

  if (isEnd) {
    refs.btnNext.classList.remove('active');
  } else {
    refs.btnNext.classList.add('active');
  }
}
