import { body } from './render-arrow-for-common-scroll';

export function updArrowDirection(arrow) {
  const halfwayPage = (body.scrollHeight - window.innerHeight) / 2;
  window.scrollY >= halfwayPage
    ? arrow.classList.add('up')
    : arrow.classList.remove('up');
}
