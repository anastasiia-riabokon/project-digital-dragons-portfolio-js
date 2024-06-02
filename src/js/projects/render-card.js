import { projects } from './data';
import 'lazysizes';

function cardTemplate(project) {
  const hashtagList = project.hashtags
    .map(
      tag => `<li class="item-hashtag"><p class="text-hashtag">${tag}</p></li>`
    )
    .join('');

  return `
    <li class="item-project swiper-slide" id="item-slider">
      <div class="white-block">
        <ul class="list-hashtag">
          ${hashtagList}
        </ul>
        <h3 class="subtitle-projects">${project.title}</h3>
        <a
          class="link-project"
          href="${project.linkProject}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link see project"
        >
          See project
        </a>
      </div>
        <picture class="dark-block">
          <source
            class="lazyload"
            media="(min-width: 1440px)"
            data-srcset="
              ${project.imgLinkDesk} 1x,
              ${project.imgLinkDeskRetina} 2x"
          />
          <source
            class="lazyload"
            media="(min-width: 768px)"
            data-srcset="
              ${project.imgLinkTab} 1x,
              ${project.imgLinkTabRetina} 2x"
          />
          <source
            class="lazyload"
            media="(max-width: 767px)"
            data-srcset="
              ${project.imgLinkMob} 1x,
              ${project.imgLinkMobRetina} 2x"
          />
          <img
            class="lazyload"
            src="${project.imgLinkDesk}"
            alt="${project.titleImage}"
            width="614"
            height="385"
            loading="lazy"
          />
        </picture>
   
    </li>
  `;
}

function cardsTemplate(arr) {
  return arr.map(cardTemplate).join('');
}

export function renderImg(element) {
  const markup = cardsTemplate(projects);
  element.insertAdjacentHTML('beforeend', markup);
}
