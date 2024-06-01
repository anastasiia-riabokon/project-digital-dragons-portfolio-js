import { scrollPage } from '../common/scroll';

const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');
const btnOrder = document.querySelector('.order-btn');

let menuOpen = false;

function toggleMenu() {
  if (!menuOpen) {
    menuList.style.opacity = '1';
    menuList.style.pointerEvents = 'auto';
    menuOpen = true;
  } else {
    menuList.style.opacity = '0';
    menuList.style.pointerEvents = 'none';
    menuOpen = false;
  }
}

menuList.style.opacity = '0';
menuList.style.pointerEvents = 'none';

//=============================================

menuBtn.addEventListener('click', toggleMenu);
menuList.addEventListener('click', event =>
  scrollPage(event, '.menu-list-link')
);
btnOrder.addEventListener('click', event => scrollPage(event, '.order-btn'));
