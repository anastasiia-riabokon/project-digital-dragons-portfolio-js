import { renderArrowForCommonScroll } from './render-arrow-for-common-scroll';
import { body } from './render-arrow-for-common-scroll';
import { updArrowDirection } from './upd-arrow-direction';

window.addEventListener('DOMContentLoaded', () => {
  renderArrowForCommonScroll();
  const scrollArrow = document.querySelector('#arrow-down');

  updArrowDirection(scrollArrow);

  scrollArrow.addEventListener('click', () => {
    const halfwayPage = (body.scrollHeight - window.innerHeight) / 2;
    window.scrollY >= halfwayPage
      ? window.scrollTo({ top: 0, behavior: 'smooth' })
      : window.scrollTo({ top: body.offsetHeight, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => updArrowDirection(scrollArrow));
});
