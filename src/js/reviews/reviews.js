import { refs } from './refs';
import { fetchReviews } from '../api';
import { onSwiper } from './swiper';
import { usersTemplate } from './templates';
import { showErrorMessage } from './show_error';
import { hiddenBtn } from './show_error';

window.addEventListener('DOMContentLoaded', renderReviews);

async function renderReviews() {
  try {
    const users = await fetchReviews();

    if (users.length === 0) {
      showErrorMessage();
      return;
    }

    const markup = usersTemplate(users);

    refs.ulEl.innerHTML = markup;
    onSwiper();
  } catch (error) {
    hiddenBtn();
    refs.ulEl.innerHTML = "<li class='not-found'>Not found reviews</li>";
    console.log(error);
    showErrorMessage();
  }
}
