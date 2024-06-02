import imgProject1 from '../../img/covers/projects/project1.png';
import imgProject1Retina from '../../img/covers/projects/project1@2x.png';
import imgProject2 from '../../img/covers/projects/project2.png';
import imgProject2Retina from '../../img/covers/projects/project2@2x.png';
import imgProject3 from '../../img/covers/projects/project3.png';
import imgProject3Retina from '../../img/covers/projects/project3@2x.png';
import imgProject4 from '../../img/covers/projects/project4.png';
import imgProject4Retina from '../../img/covers/projects/project4@2x.png';
import imgProject5 from '../../img/covers/projects/project5.png';
import imgProject5Retina from '../../img/covers/projects/project5@2x.png';
import imgProject6 from '../../img/covers/projects/project6.png';
import imgProject6Retina from '../../img/covers/projects/project6@2x.png';
import imgProject7 from '../../img/covers/projects/project7.png';
import imgProject7Retina from '../../img/covers/projects/project7@2x.png';
import imgProject8 from '../../img/covers/projects/project8.png';
import imgProject8Retina from '../../img/covers/projects/project8@2x.png';
import imgProject9 from '../../img/covers/projects/project9.png';
import imgProject9Retina from '../../img/covers/projects/project9@2x.png';
import imgProject10 from '../../img/covers/projects/project10.png';
import imgProject10Retina from '../../img/covers/projects/project10@2x.png';

const imagesData = [
  {
    src: imgProject1,
    srcset: imgProject1Retina,
    alt: 'Project 1',
  },
  {
    src: imgProject2,
    srcset: imgProject2Retina,
    alt: 'Project 2',
  },
  {
    src: imgProject3,
    srcset: imgProject3Retina,
    alt: 'Project 3',
  },
  {
    src: imgProject4,
    srcset: imgProject4Retina,
    alt: 'Project 4',
  },
  {
    src: imgProject5,
    srcset: imgProject5Retina,
    alt: 'Project 5',
  },
  {
    src: imgProject6,
    srcset: imgProject6Retina,
    alt: 'Project 6',
  },
  {
    src: imgProject7,
    srcset: imgProject7Retina,
    alt: 'Project 7',
  },
  {
    src: imgProject8,
    srcset: imgProject8Retina,
    alt: 'Project 8',
  },
  {
    src: imgProject9,
    srcset: imgProject9Retina,
    alt: 'Project 9',
  },
  {
    src: imgProject10,
    srcset: imgProject10Retina,
    alt: 'Project 10',
  },
  {
    src: imgProject1,
    srcset: imgProject1Retina,
    alt: 'Project 1',
  },
  {
    src: imgProject2,
    srcset: imgProject2Retina,
    alt: 'Project 2',
  },
  {
    src: imgProject3,
    srcset: imgProject3Retina,
    alt: 'Project 3',
  },
];

function createImageRow(images) {
  return images
    .map(
      image =>
        `<img src="${image.src}" alt="${image.alt}" class="marquee__line">`
    )
    .join('');
}

const markup = createImageRow(imagesData);

const marqueeInner = document.querySelector('.marquee__inner');
const marqueeInnerOne = document.querySelector('.marquee__inner_one');
const marqueeInnerTwo = document.querySelector('.marquee__inner_two');
const marqueeInnerThree = document.querySelector('.marquee__inner_three');

marqueeInner.innerHTML = markup;
marqueeInnerOne.innerHTML = markup;
marqueeInnerTwo.innerHTML = markup;
marqueeInnerThree.innerHTML = markup;
