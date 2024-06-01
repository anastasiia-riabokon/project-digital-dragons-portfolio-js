import { ref } from './reference';
import { renderSvg } from './render-icon';
import { renderImg } from './render-card';
import { updStatusArrow } from '../common/status-arrow';

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, EffectCreative } from 'swiper/modules';

window.addEventListener('DOMContentLoaded', () => {
  renderImg(ref.projectSectionContainer);
  renderSvg(ref.arrowContainer);

  const arrowRight = ref.arrowContainer.querySelector(
    '.btn-project-arrow-right'
  );
  const arrowLeft = ref.arrowContainer.querySelector('.btn-project-arrow-left');

  const mySwiper = new Swiper('.mySwiper', {
    modules: [Navigation, Keyboard, EffectCreative],
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 500,
    navigation: {
      nextEl: '.btn-project-arrow-right',
      prevEl: '.btn-project-arrow-left',
    },
    keyboard: {
      enabled: true,
    },
    effect: 'creative',
    grabCursor: true,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
  });

  updStatusArrow(mySwiper, arrowLeft, arrowRight);
  mySwiper.on('reachBeginning slideChange reachEnd', () =>
    updStatusArrow(mySwiper, arrowLeft, arrowRight)
  );
});
