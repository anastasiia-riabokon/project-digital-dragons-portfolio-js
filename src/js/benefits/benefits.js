import iconsSvg from '../../img/icons.svg';

const benefits = [
  {
    iconName: 'expertise',
    title: 'Expertise',
    text: 'As a highly experienced developer, I have deep knowledge of programming and website development.',
  },
  {
    iconName: 'communication',
    title: 'Communication',
    text: ' Understanding your needs and wants is my priority and I am always open to discussions and corrections.',
  },
  {
    iconName: 'art',
    title: 'Art',
    text: 'Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. ',
  },
  {
    iconName: 'execution',
    title: 'Urgent execution',
    text: 'I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work.',
  },
];

const ref = {
  ulEl: document.querySelector('.js-benefits-list'),
};

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

const markup = itemsTemplate(benefits);
ref.ulEl.innerHTML = markup;
