import { hashtag } from './hashtag';

function hashtagItemTemplate({ text }) {
  return `<li class="item-hashtag">
            <p class="text-hashtag">${text}</p>
          </li>`;
}

function hashtagListTemplate(arr) {
  return arr.map(hashtagItemTemplate).join('');
}

export function renderHashtag(element) {
  const markup = hashtagListTemplate(hashtag);
  element.insertAdjacentHTML('beforeend', markup);
}
