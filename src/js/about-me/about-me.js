import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import iconSvg from '../../img/icons.svg';

const aboutMeArray = [
  {
    title: 'About me',
    content: [
      'I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.',
      'Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software.',
    ],
  },
  {
    title: 'Role',
    content: [
      'Frontend development',
      'HeadlessCMS,Wordpress',
      'Blender(enjoy)',
    ],
  },
  {
    title: 'Education',
    content: [
      '2018 - 2019  / Frontend Development Diploma, GoIT IT School, New York',
      '2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York',
      '2020 - 2022 / Advanced Blender Animation Techniques, Udemy',
    ],
  },
];

const aboutSectionParentEl = document.querySelector('ul.about-me-list');

// ================================== MARKUP ==================================

function renderAboutSection(array) {
  aboutSectionParentEl.innerHTML = createAboutMarkup(array);
}

const arrowMarkup = `<button class="arrow-button" aria-label="arrow for open or close text"><svg class="arrow-icon js-down" width="20" height="20"><use href="${iconSvg}#arrow"></use></svg></button>`;

function createAboutParagraph({ content }) {
  const text = content.join('</p><p>');
  const paragraph = `<div class="ac-panel about-list-text-box"><div class="ac-text"><p>${text}</p></div></div>`;
  return paragraph;
}

function createAboutMarkup(array) {
  let aboutMarkup = '';
  array.forEach(unit => {
    const textMarkup = createAboutParagraph(unit);
    const aboutUnitMarkup = `<li class="ac about-me-item"><div class="ac-header ac-trigger about-list-header-box"><h4 class="about-title grey-accent-text">${unit.title}</h4>${arrowMarkup}</div>${textMarkup}</li>`;
    aboutMarkup += aboutUnitMarkup;
  });
  return aboutMarkup;
}

// ================================== ACCORDION ==================================

const containerOptions = {
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

renderAboutSection(aboutMeArray);
const accordion = new Accordion('.accordion-container', containerOptions);
accordion.open(0);
