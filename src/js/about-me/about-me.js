import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const containerOptions = {
  beforeOpen: function (currentElement) {
    console.log(currentElement);
    currentElement
      .querySelector('.js-down')
      .setAttribute('transform', 'rotate(180)');
  },
  beforeClose: function (currentElement) {
    console.log(currentElement);
    currentElement
      .querySelector('.js-down')
      .setAttribute('transform', 'rotate(0))');
  },
};

const accordion = new Accordion('.accordion-container', containerOptions);

onload = () => accordion.open(0);
