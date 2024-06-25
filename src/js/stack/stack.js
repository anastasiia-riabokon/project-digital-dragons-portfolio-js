import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';
import { stackSlide, query, themeColorClass } from './stackVariables';

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

query.slidesList.addEventListener('click', e => {
  if (e.target.nodeName !== 'LI') return;

  const prevIndex = stackSlide.active.object().dataset.index;
  const newIndex = e.target.dataset.index;
  changeThemeColor(prevIndex, newIndex);

  stackSlide.active.object().classList.remove('slide-active');
  e.target.classList.add('slide-active');
  stackSlide.activeIndex = e.target.dataset.index;
});

function mobileNextSlide() {
  if (stackSlide.activeIndex <= 5 && stackSlide.sibling.object()) {
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
  if (stackSlide.activeIndex <= 5 && stackSlide.sibling.object()) {
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
    const prevIndex = stackSlide.active.object().dataset.index;
    const newIndex = stackSlide.sibling.object().dataset.index;
    changeThemeColor(prevIndex, newIndex);

    stackSlide.sibling.object().classList.add('slide-active');
    stackSlide.active.object().classList.remove('slide-active');
    stackSlide.activeIndex += 1;
  },
  activeToFirst() {
    const prevIndex = stackSlide.active.object().dataset.index;
    const newIndex = stackSlide.first.object().dataset.index;
    changeThemeColor(prevIndex, newIndex);

    stackSlide.active.object().classList.remove('slide-active');
    stackSlide.first.object().classList.add('slide-active');
    stackSlide.activeIndex = 0;
  },
};

function changeThemeColor(prevIndex, newIndex) {
  query.body.classList.remove(themeColorClass[prevIndex]);
  query.body.classList.add(themeColorClass[newIndex]);
}

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
