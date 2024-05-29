import { ref } from './reference';
import { renderSvg } from './render-icon';
import { renderHashtag } from './render-hashtag';
import * as images from './images';
import 'lazysizes';

const projects = [
  {
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    imgLinkDesk: images.imgBookDesk,
    imgLinkDeskRetina: images.imgBookDeskRetina,
    imgLinkTab: images.imgBookTab,
    imgLinkTabRetina: images.imgBookTabRetina,
    imgLinkMob: images.imgBookMob,
    imgLinkMobRetina: images.imgBookMobRetina,
    linkProject:
      'https://github.com/anastasiia-riabokon/project-digital-dragons-portfolio-js/',
    titleImage: 'project book',
  },
  {},
  {},
];

function cardTemplate({
  imgLinkDesk,
  imgLinkDeskRetina,
  imgLinkTab,
  imgLinkTabRetina,
  imgLinkMob,
  imgLinkMobRetina,
}) {
  return `<source
    class="lazyload"
    media="(min-width: 1440px)"
    data-srcset="
      ${imgLinkDesk} 1x,
      ${imgLinkDeskRetina} 2x"
  />
  <source
    class="lazyload"
    media="(min-width: 768px)"
    data-srcset="
      ${imgLinkTab} 1x,
      ${imgLinkTabRetina} 2x"
  />
  <source
    class="lazyload"
    media="(max-width: 767px)"
    data-srcset="
      ${imgLinkMob} 1x,
      ${imgLinkMobRetina} 2x"
  />
  <img
    class="lazyload"
    src="${imgLinkDesk}" 
    alt="project"
    width="614"
    height="385"
    loading="lazy"
    onerror="this.onerror=null; this.style.display='none';"
  />`;
}

const markup = cardTemplate(images);
ref.darkBlock.insertAdjacentHTML('beforeend', markup);

renderSvg(ref.arrowContainer);
renderHashtag(ref.listHashtag);
