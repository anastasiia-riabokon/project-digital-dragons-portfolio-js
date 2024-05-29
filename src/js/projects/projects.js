import { ref } from './reference';
import { renderSvg } from './render-icon';
import { renderHashtag } from './render-hashtag';
import * as images from './images';

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

function cardTemplate(obj) {
  return ``;
}

renderSvg(ref.arrowContainer);
renderHashtag(ref.listHashtag);
