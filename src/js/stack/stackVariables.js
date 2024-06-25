export const query = {
  nextButton: document.querySelector('.js-arrow'),
  slidesList: document.querySelector('.js-stack-list'),
  body: document.body,
};

export const stackSlide = {
  first: {
    object() {
      return query.slidesList.children[0];
    },
  },
  active: {
    object() {
      return query.slidesList.querySelector('.slide-active');
    },
  },
  sibling: {
    object() {
      return query.slidesList.querySelector('.slide-active').nextElementSibling;
    },
  },

  clickedIndex: 0,
  activeIndex: 0,
};

export const themeColorClass = [
  'dark-green-theme',
  'light-green-theme',
  'blue-theme',
  'tomato-theme',
  'coral-theme',
  'orange-theme',
];
