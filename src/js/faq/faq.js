import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import iconSvg from '../../img/icons.svg';

const faqArray = [
  {
    title: 'What programming languages ​​are most often used in your project?',
    content:
      'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
  },
  {
    title: 'How can I contact you?',
    content:
      'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
  },
  {
    title: 'What are the deadlines for the project?',
    content:
      'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
  },
  {
    title: 'Do you provide advice or support?',
    content:
      'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
  },
  {
    title: 'What payment methods do you accept?',
    content:
      'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
  },
  {
    title:
      'What does the process of developing a software product look like from idea to implementation?',
    content:
      'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
  },
];

const faqSectionParentEl = document.querySelector('ul.faq-list');

// ================================== MARKUP ==================================

function renderFaqSection(array) {
  faqSectionParentEl.innerHTML = createFaqMarkup(array);
}

const arrowMarkup = `<button class="arrow-button" aria-label="arrow for open or close text"><svg class="arrow-icon js-down" width="20" height="20"><use href="${iconSvg}#arrow"></use></svg></button>`;

function createFaqParagraph({ content }) {
  const paragraph = `<div class="faq-list-content-box ac-panel"><p class="faq-list-content ac-text">${content}</p></div>`;
  return paragraph;
}

function createFaqMarkup(array) {
  let faqMarkup = '';
  array.forEach(unit => {
    const textMarkup = createFaqParagraph(unit);
    const faqUnitMarkup = `<li class="faq-list-item ac"><div class="faq-list-header-box ac-header ac-trigger"><h5 class="faq-list-header">${unit.title}</h5>${arrowMarkup}</div>${textMarkup}</li>`;
    faqMarkup += faqUnitMarkup;
  });
  return faqMarkup;
}

// ================================== ACCORDION ==================================

const containerOptions = {
  showMultiple: true,
  beforeOpen: function (currentElement) {
    currentElement
      .querySelector('.js-down')
      .setAttribute('transform', 'rotate(180)');
  },
  beforeClose: function (currentElement) {
    currentElement
      .querySelector('.js-down')
      .setAttribute('transform', 'rotate(0)');
  },
};

// ================================== RENDER ==================================

renderFaqSection(faqArray);
const accordion = new Accordion('.accordion-container-faq', containerOptions);
