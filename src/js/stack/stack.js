import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';
import { stackSlide, query } from './stackVariables';

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
    init() {
      stackSlide.first.object().classList.add('slide-active');
    },
    click() {
      stackSlide.clickedIndex = this.clickedIndex;
      if (stackSlide.clickedIndex !== undefined) {
        stackSlide.activeIndex = stackSlide.clickedIndex;
        this.activeIndex = stackSlide.activeIndex;
        stackSlide.active.object().classList.remove('slide-active');
        this.slides[stackSlide.clickedIndex].classList.add('slide-active');
      }
    },
  },
});

query.nextButton.addEventListener('click', () => {
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
  if (stackSlide.activeIndex < 5 && stackSlide.sibling.object()) {
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
  if (stackSlide.activeIndex < 5 && stackSlide.sibling.object()) {
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
