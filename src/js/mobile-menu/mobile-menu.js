const menuBtn = document.querySelector('.menu-burger');
const modalMenu = document.querySelector('.modal-mob-menu');
const modalCloseBtn = document.querySelector('.modal-button');
const menuLinks = document.querySelectorAll('.menu-list-link');

menuBtn.addEventListener('click', function () {
  modalMenu.classList.toggle('is-open');
});

modalCloseBtn.addEventListener('click', function () {
  modalMenu.classList.remove('is-open');
});

menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    modalMenu.classList.remove('is-open');
  });
});
