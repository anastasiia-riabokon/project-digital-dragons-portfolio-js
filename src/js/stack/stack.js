import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Navigation, Keyboard } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 5,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1440: {
      slidesPerView: 6,
      slidesPerGroup: 1,
      loop: false,
    },
  },
  on: {
    click() {
      const clickedSlideIndex = this.clickedIndex;
      if (clickedSlideIndex !== undefined) {
        this.slides.forEach(slide =>
          slide.classList.remove('swiper-slide-active')
        );
        this.slides[clickedSlideIndex].classList.add('swiper-slide-active');
      }
    },
  },
});

const nextButton = document.querySelector('.js-arrow');

nextButton.addEventListener('click', () => {
  swiper.slideNext();
});

// ! Для зображень, виявлення ширини екрана
// function getDeviceType() {
//   const width = window.innerWidth;

//   if (width < 768) {
//     return 'mobile'; // Смартфон
//   } else if (width < 1024) {
//     return 'tablet'; // Планшет
//   } else {
//     return 'desktop'; // Комп'ютер
//   }
// }
