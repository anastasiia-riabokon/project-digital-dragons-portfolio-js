import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs } from './refs';

export function showErrorMessage() {
  iziToast.error({
    title: '',
    message: 'Error fetching reviews. Server isn`t working',
    position: 'topRight',
    backgroundColor: '#ED3B44',
    messageColor: 'white',
  });
}

export function hiddenBtn() {
  refs.btnNext.classList.add('visually-hidden');
  refs.btnPrev.classList.add('visually-hidden');
}
