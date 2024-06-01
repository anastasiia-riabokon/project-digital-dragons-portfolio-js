import iconsSvg from '../../img/icons.svg';
import { benefits } from './data';
import { refs } from './refs';

function itemTemplate({ iconName, title, text }) {
  return `
  <li class="benefits-list-item">
  <svg
    class="benefits-item-icon icon-${iconName}">
    <use href="${iconsSvg}#${iconName}"></use>
  </svg>
  <h5 class="benefits-item-title">${title}</h5>
        <p class="benefits-item-text">${text}</p>
      </li>`;
}

function itemsTemplate(arr) {
  return arr.map(itemTemplate).join('');
}

export function renderBenefits() {
  const markup = itemsTemplate(benefits);
  refs.ulEl.innerHTML = markup;
}
