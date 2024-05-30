import { icons } from './icons';
import iconsSvg from '../../img/icons.svg';

function iconTemplate({ iconName, svgHeight, svgWidth }) {
  return `
  <button class="${iconName}">
<svg class="icon-project icon-project-${iconName}" width="${svgWidth}" height="${svgHeight}">
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
