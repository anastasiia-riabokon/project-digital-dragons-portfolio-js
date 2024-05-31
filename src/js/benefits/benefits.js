import { refs } from './refs';
import { renderBenefits } from './render-benefits';
import { btnClickForLink } from './no-hash-links';

window.addEventListener('DOMContentLoaded', renderBenefits);
refs.btnEl.addEventListener('click', btnClickForLink);
