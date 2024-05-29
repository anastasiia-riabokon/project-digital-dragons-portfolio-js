import { fetchReviews, sendRequest } from '../api';

const formEl = document.querySelector('.footer-form');
const successMessageEl = document.querySelector('.form-success-text');
const errorMessageEl = document.querySelector('.form-error-text');

formEl.addEventListener('input', () => {
  const emailInput = formEl.querySelector('#email');
  const commentInput = formEl.querySelector('#comment');

  const emailValue = emailInput.value.trim();
  const commentValue = commentInput.value.trim();

  if (emailValue !== '') {
    if (emailInput.validity.valid) {
      successMessageEl.style.opacity = '1';
      errorMessageEl.style.opacity = '0';
    } else {
      successMessageEl.style.opacity = '0';
      errorMessageEl.style.opacity = '1';
    }
  } else {
    successMessageEl.style.opacity = '0';
    errorMessageEl.style.opacity = '0';
  }
});

formEl.addEventListener('submit', evt => {
  evt.preventDefault();

  const emailValue = evt.target.email.value.trim();
  const commentValue = evt.target.comment.value.trim();

  console.log(emailValue, commentValue);
});
