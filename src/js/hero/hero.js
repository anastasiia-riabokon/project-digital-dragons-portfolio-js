const imagesLowResDesk = [
  '../../img/hero/Hero_red.png',
  '../../img/hero/Hero-neo-green.png',
  '../../img/hero/Hero-hot-orange.png',
  '../../img/hero/Hero-blue.png',
  '../../img/hero/Hero-green.png',
  '../../img/hero/Hero-orange.png',
];
const imagesHighResDesk = [
  '../../img/hero/Hero@2x_red.png',
  '../../img/hero/Hero@2x-neo-green.png',
  '../../img/hero/Hero@2x-hot-orange.png',
  '../../img/hero/Hero@2x-blue.png',
  '../../img/hero/Hero@2x-green.png',
  '../../img/hero/Hero@2x-orange.png',
];
const imagesLowResTab = [
  '../../img/hero/red-tablet_result.png',
  '../../img/hero/',
  '../../img/hero/',
  '../../img/hero/',
  '../../img/hero/',
  '../../img/hero/',
];
const imagesHighResTab = [
  '../../img/hero/red-tablet@2x_result.png',
  '../../img/hero/',
  '../../img/hero/',
  '../../img/hero/',
  '../../img/hero/',
  '../../img/hero/',
];
const imagesLowResMob = [
  '../../img/hero/red-mobile_result.png',
  '../../img/hero/',
  '../../img/hero/',
  '../../img/hero/',
  '../../img/hero/',
  '../../img/hero/',
];
const imagesHighResMob = [
  '../../img/hero/red-mobile@2x_result.png',
  '../../img/hero/',
  '../../img/hero/',
  '../../img/hero/',
  '../../img/hero/',
  '../../img/hero/',
];

let currentIndex = 0;
const heroSection = document.querySelector('.hero');

function changeBackgroundImage() {
  const mediaQueryDeskWidth = window.matchMedia('(min-width: 1440px)');
  const mediaQueryTabWidth = window.matchMedia('(min-width: 768px)');
  const mediaQueryMobWidth = window.matchMedia('(min-width: 375px)');
  const mediaQuery = window.matchMedia('(min-resolution: 192dpi)');

  // currentIndex = ;

  if (mediaQueryDeskWidth.matches) {
    if (mediaQuery.matches) {
      heroSection.style.backgroundImage = imagesHighResDesk[currentIndex];
    } else {
      heroSection.style.backgroundImage = imagesLowResDesk[currentIndex];
    }
  } else if (mediaQueryTabWidth.matches) {
    if (mediaQuery.matches) {
      heroSection.style.backgroundImage = imagesHighResTab[currentIndex];
    } else {
      heroSection.style.backgroundImage = imagesLowResTab[currentIndex];
    }
  } else if (mediaQueryMobWidth.matches) {
    if (mediaQuery.matches) {
      heroSection.style.backgroundImage = imagesHighResMob[currentIndex];
    } else {
      heroSection.style.backgroundImage = imagesLowResMob[currentIndex];
    }
  }
}
