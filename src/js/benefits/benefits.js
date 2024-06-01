import { refs } from './refs';
import { renderBenefits } from './render-benefits';
import { scrollPage } from '../common/scroll';

window.addEventListener('DOMContentLoaded', renderBenefits);
refs.btnEl.addEventListener('click', event =>
  scrollPage(event, '.benefits-btn')
);
