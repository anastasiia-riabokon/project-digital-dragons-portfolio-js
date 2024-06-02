import iconsSvg from '../../../img/icons.svg';

const iconArrow = {
  iconName: 'arrow-down',
  svgWidth: 52,
  svgHeight: 52,
  sizeScreen() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      this.svgWidth = this.svgHeight = 42;
    } else if (
      window.matchMedia('(min-width: 768px) and (max-width: 1439px)').matches
    ) {
      this.svgWidth = this.svgHeight = 52;
    } else {
      this.svgWidth = this.svgHeight = 72;
    }
  },
};

iconArrow.sizeScreen();

export const body = document.body;

function iconArrowTemplate({ iconName, svgHeight, svgWidth }) {
  return `
  <button class="scroll-${iconName}" id="${iconName}" aria-label="arrow for scroll on page (up/down)">
<svg class="icon-arrow icon-${iconName}" width="${svgWidth}" height="${svgHeight}">
  <use href="${iconsSvg}#${iconName}"></use>
</svg>
</button>
`;
}

export function renderArrowForCommonScroll() {
  const markup = iconArrowTemplate(iconArrow);
  body.insertAdjacentHTML('beforeend', markup);
}
