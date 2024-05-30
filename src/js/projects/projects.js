import { ref } from './reference';
import { renderSvg } from './render-icon';
import { renderImg } from './render-card';

import Swiper from 'swiper';
import 'swiper/css';

window.addEventListener('load', () => {
  renderImg(ref.projectSectionContainer);
  renderSvg(ref.arrowContainer);

  ref.arrowContainer.addEventListener('click', handleOnArrow);
});

function handleOnArrow(event) {
  const btn = event.target;

  if (btn.nodeName !== 'BUTTON') return;
}

// const swiper = new Swiper('.swiper', {
//   direction: 'horizontal',
//   slidesPerView: 1,
//   spaceBetween: 20,
//   loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: '.arrow-right',
//     prevEl: '.arrow-left',
//   },
// });
