import { fetchReviews } from '../api';
import { onSwiper } from './swiper';
import { refs } from './refs';
import { usersTemplate } from './templates';

// window.addEventListener('DOMContentLoaded', () => {
//   renderReviews();
//   onSwiper();
// });

async function renderReviews() {
  try {
    const users = await fetchReviews();

    if (users.length === 0) {
      refs.ulEl.innerHTML = "<li class='not-found'>Not found</li>";
      return;
    }

    const markup = usersTemplate(users);

    refs.ulEl.innerHTML = markup;
    onSwiper();
  } catch (error) {
    console.log(error);
  }
}
renderReviews();
