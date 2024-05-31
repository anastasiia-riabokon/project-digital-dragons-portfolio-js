import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Navigation, Keyboard } from 'swiper/modules';

const nextButton = document.querySelector('.js-arrow');
const slidesList = document.querySelector('.js-stack-list');

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
  navigation: {
    nextEl: '.js-arrow',
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
    },
  },
  on: {
    click() {
      const clickedSlideIndex = this.clickedIndex;
      console.log();
      this.activeIndex = clickedSlideIndex;
      if (clickedSlideIndex !== undefined) {
        this.slides.forEach(slide =>
          slide.classList.remove('swiper-slide-active')
        );
        this.slides[clickedSlideIndex].classList.add('swiper-slide-active');
      }
    },
  },
});

nextButton.addEventListener('click', () => {
  console.log(foo.dataset.id);
});

slidesList.addEventListener('click', e => {
  console.log(foo().dataset.id);
});

const foo = () => {
  return slidesList.querySelector('.swiper-slide-active');
};

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
