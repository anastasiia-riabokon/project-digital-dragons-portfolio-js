import { refs } from './refs';
import { fetchReviews } from '../api';
import { usersTemplate } from './templates';
import { showErrorMessage } from './show_error';
import { hiddenBtn } from './show_error';
import { onMySwiper } from './mySwiper';

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

    onMySwiper();
  } catch (error) {
    hiddenBtn();
    refs.ulEl.innerHTML = "<li class='not-found'>Not found reviews</li>";
    console.log(error);
    showErrorMessage();
  }
}
