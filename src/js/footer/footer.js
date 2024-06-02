import axios from 'axios';
import { sendRequest } from '../api';
import iconSvg from '../../img/icons.svg';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.footer-form');
const successMessageEl = document.querySelector('.form-success-text');
const errorMessageEl = document.querySelector('.form-error-text');

const modal = basicLightbox.create(
  `
    <div class="modal">
        <svg class="icon">
          <use href="${iconSvg}#icon-close-modal"></use>
        </svg>
        <h5>Thank you for your interest in cooperation!</h5>
        <p>
            The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.
        </p>
    </div>
`,
  {
    onShow: instance => {
      instance.element().querySelector('.icon').onclick = instance.close;
    },
  }
);

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

formEl.addEventListener('submit', async evt => {
  evt.preventDefault();

  const emailValue = evt.target.email.value.trim();
  const commentValue = evt.target.comment.value.trim();

  try {
    await sendRequest(emailValue, commentValue);

    modal.show();

    formEl.reset();
    successMessageEl.style.opacity = '0';
    errorMessageEl.style.opacity = '0';
  } catch (error) {
    warningAlert();
    console.error('Error sending request:', error);
  }
});

function warningAlert() {
  iziToast.warning({
    title: 'Warning',
    titleColor: 'white',
    message: 'Unknown error',
    messageColor: 'white',
    color: '#ED3B44',
    closeOnClick: true,
    position: 'topRight',
    timeout: 4000,
  });
}
