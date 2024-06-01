import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Navigation, Keyboard } from 'swiper/modules';

const nextButton = document.querySelector('.js-arrow');
const slidesList = document.querySelector('.js-stack-list');

const stackSlide = {
  first: {
    object() {
      return slidesList.children[0];
    },
    index() {
      return Number(slidesList.children[0].dataset.index);
    },
  },
  active: {
    object() {
      return slidesList.querySelector('.slide-active');
    },
    index() {
      return Number(slidesList.querySelector('.slide-active').dataset.index);
    },
  },
  sibling: {
    object() {
      return slidesList.querySelector('.slide-active').nextElementSibling;
    },
    index() {
      return Number(
        slidesList.querySelector('.slide-active').nextElementSibling.dataset
          .index
      );
    },
  },

  clickedIndex: 0,
  activeIndex: 0,
};

const swiper = new Swiper('#stack', {
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
  on: {
    click() {
      stackSlide.clickedIndex = this.clickedIndex;

      if (stackSlide.clickedIndex !== undefined) {
        stackSlide.activeIndex = stackSlide.clickedIndex;
        this.activeIndex = stackSlide.activeIndex;
        this.slides.forEach(slide => slide.classList.remove('slide-active'));
        this.slides[stackSlide.clickedIndex].classList.add('slide-active');
      }
    },
  },
});

nextButton.addEventListener('click', () => {
  const deviceType = getDeviceType();

  if (deviceType === 'mobile') {
    mobileNextSlide();
  }
  if (deviceType === 'tablet') {
    tabletNextSlide();
  }
  if (deviceType === 'desktop') {
    desktopNextSlide();
  }
});

function mobileNextSlide() {
  if (stackSlide.active.index() < 5) {
    changeActiveSlide.activeToSibling();
    if (stackSlide.activeIndex === 2 || stackSlide.activeIndex === 4) {
      swiper.slideNext();
    }
  } else {
    changeActiveSlide.activeToFirst();
    swiper.slideNext();
  }
}

function tabletNextSlide() {
  if (stackSlide.active.index() < 5) {
    changeActiveSlide.activeToSibling();
    if (stackSlide.activeIndex === 3) {
      swiper.slideNext();
    }
  } else {
    changeActiveSlide.activeToFirst();
    swiper.slideNext();
  }
}

function desktopNextSlide() {
  if (stackSlide.sibling.object()) {
    changeActiveSlide.activeToSibling();
  } else {
    changeActiveSlide.activeToFirst();
  }
}

const changeActiveSlide = {
  activeToSibling() {
    stackSlide.sibling.object().classList.add('slide-active');
    stackSlide.active.object().classList.remove('slide-active');
    stackSlide.activeIndex += 1;
  },
  activeToFirst() {
    stackSlide.active.object().classList.remove('slide-active');
    stackSlide.first.object().classList.add('slide-active');
    stackSlide.activeIndex = 0;
  },
};

// ! Для зображень, виявлення ширини екрана
function getDeviceType() {
  const width = window.innerWidth;

  if (width < 768) {
    return 'mobile';
  } else if (width < 1440) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}
