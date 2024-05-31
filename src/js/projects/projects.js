import { ref } from './reference';
import { renderSvg } from './render-icon';
import { renderImg } from './render-card';
import { UpdStatusArrow } from './status-arrow';

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, EffectCreative } from 'swiper/modules';

window.addEventListener('DOMContentLoaded', () => {
  renderImg(ref.projectSectionContainer);
  renderSvg(ref.arrowContainer);

  const arrowRight = ref.arrowContainer.querySelector('.btn-arrow-right');
  const arrowLeft = ref.arrowContainer.querySelector('.btn-arrow-left');

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Keyboard, EffectCreative],
    direction: 'horizontal',
    slidesPerView: 1,
    speed: 500,
    navigation: {
      nextEl: '.btn-arrow-right',
      prevEl: '.btn-arrow-left',
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

  UpdStatusArrow(swiper, arrowLeft, arrowRight);
  swiper.on('reachBeginning slideChange reachEnd', () =>
    UpdStatusArrow(swiper, arrowLeft, arrowRight)
  );
});
