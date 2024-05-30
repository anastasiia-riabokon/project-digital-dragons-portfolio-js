const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');

menuList.style.display = 'none';

menuBtn.addEventListener('click', () => {
  if (menuList.style.display === 'none') {
    menuList.style.display = 'flex';
  } else {
    menuList.style.display = 'none';
  }
});
