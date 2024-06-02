import { icons } from './icons';
import iconsSvg from '../../img/icons.svg';

function iconTemplate({ iconName, svgHeight, svgWidth }) {
  return `
  <button class="btn-${iconName} btn-project-${iconName}" aria-label="arrow for change slide">
<svg class="icon-arrow icon-${iconName}" width="${svgWidth}" height="${svgHeight}">
  <use href="${iconsSvg}#${iconName}"></use>
</svg>
</button>
`;
}

function iconsTemplate(arr) {
  return arr.map(iconTemplate).join('');
}

export function renderSvg(element) {
  const markup = iconsTemplate(icons);
  element.insertAdjacentHTML('beforeend', markup);
}
