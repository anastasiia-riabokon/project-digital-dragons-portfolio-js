const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');

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

menuList.addEventListener('click', event => {
  if (event.target.matches('.menu-list-link')) {
    event.preventDefault();

    const targetId = event.target.getAttribute('href');

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const targetOffset = targetSection.offsetTop;

      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
      });
    }
  }
});
