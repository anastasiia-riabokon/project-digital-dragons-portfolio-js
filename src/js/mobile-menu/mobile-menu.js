const menuBurger = document.querySelector('.menu-burger');
const modalMenu = document.querySelector('.modal-mob-menu');
const modalCloseBtn = document.querySelector('.modal-button');
const mobMenuList = document.querySelector('.mob-menu-list');
const mobOrderBtn = document.querySelector('.order-btn-mob');

menuBurger.addEventListener('click', function () {
  modalMenu.classList.toggle('is-open');
});

modalCloseBtn.addEventListener('click', function () {
  modalMenu.classList.remove('is-open');
});

mobMenuList.addEventListener('click', function (e) {
  if (e.target.classList.contains('mob-list-link')) {
    modalMenu.classList.remove('is-open');
  }
});

mobOrderBtn.addEventListener('click', function () {
  modalMenu.classList.remove('is-open');
});
