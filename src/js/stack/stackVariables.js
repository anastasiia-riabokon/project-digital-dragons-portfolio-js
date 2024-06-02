export const images = [
  {
    redLowResDesk: '../../img/hero/Hero_red.png',
    redHighResDesk: '../../img/hero/Hero@2x_red.png',
    redLowResTab: '../../img/hero/red-tab.png',
    redHighResTab: '../../img/hero/red-tab@2x.png',
    redLowResMob: '../../img/hero/red-mob.png',
    redHighResMob: '../../img/hero/red-mob@2x.png',
    redLowResMobMenu: '../../img/hero/red-mob-menu.png',
    redHighResMobMenu: '../../img/hero/red-mob-menu@2x.png',
  },
  {
    neoGreenLowResDesk: '../../img/hero/Hero-neo-green.png',
    neoGreenHighResDesk: '../../img/hero/Hero@2x-neo-green.png',
    neoGreenLowResTab: '../../img/hero/neo-green-tab.png',
    neoGreenHighResTab: '../../img/hero/neo-green-tab@2x.png',
    neoGreenLowResMob: '../../img/hero/neo-green-mob.png',
    neoGreenHighResMob: '../../img/hero/neo-green-mob@2x.png',
    neoGreenLowResMobMenu: '../../img/hero/neo-green-mob-menu.png',
    neoGreenHighResMobMenu: '../../img/hero/orange-mob-menu@2x.png',
  },
  {
    hotOrangeLowResDesk: '../../img/hero/Hero-hot-orange.png',
    hotOrangeHighResDesk: '../../img/hero/Hero@2x-hot-orange.png',
    hotOrangeLowResTab: '../../img/hero/hot-orange-tab.png',
    hotOrangeHighResTab: '../../img/hero/hot-orange-tab@2x.png',
    hotOrangeLowResMob: '../../img/hero/hot-orange-mob.png',
    hotOrangeHighResMob: '../../img/hero/hot-orange-mob@2x.png',
    hotOrangeLowResMobMenu: '../../img/hero/hot-orange-mob-menu.png',
    hotOrangeHighResMobMenu: '../../img/hero/hot-orange-mob-menu@2x.png',
  },
  {
    blueLowResDesk: '../../img/hero/Hero-blue.png',
    blueHighResDesk: '../../img/hero/Hero@2x-blue.png',
    blueLowResTab: '../../img/hero/blue-tab.png',
    blueHighResTab: '../../img/hero/blue-tab@2x.png',
    blueLowResMob: '../../img/hero/blue-mob.png',
    blueHighResMob: '../../img/hero/blue-mob@2x.png',
    blueLowResMobMenu: '../../img/hero/blue-mob-menu.png',
    blueHighResMobMenu: '../../img/hero/blue-mob-menu@2x.png',
  },
  {
    greenLowResDesk: '../../img/hero/Hero-green.png',
    greenHighResDesk: '../../img/hero/Hero@2x-green.png',
    greenLowResTab: '../../img/hero/green-tab.png',
    greenHighResTab: '../../img/hero/green-tab-@2x.png',
    greenLowResMob: '../../img/hero/green-mob.png',
    greenHighResMob: '../../img/hero/green-mob@2x.png',
    greenLowResMobMenu: '../../img/hero/green-mob-menu.png',
    greenHighResMobMenu: '../../img/hero/green-mob-menu@2x.png',
  },
  {
    orangeLowResDesk: '../../img/hero/Hero-orange.png',
    orangeHighResDesk: '../../img/hero/Hero@2x-orange.png',
    orangeLowResTab: '../../img/hero/orange-tab.png',
    orangeHighResTab: '../../img/hero/orange-tab@2x.png',
    orangeLowResMob: '../../img/hero/orange-mob.png',
    orangeHighResMob: '../../img/hero/orange-mob@2x.png',
    orangeLowResMobMenu: '../../img/hero/orange-mob-menu.png',
    orangeHighResMobMenu: '../../img/hero/orange-mob-menu@2x.png',
  },
];

export const query = {
  nextButton: document.querySelector('.js-arrow'),
  slidesList: document.querySelector('.js-stack-list'),
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
