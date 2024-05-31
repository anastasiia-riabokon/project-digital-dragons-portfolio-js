const imagesData = [
  {
    src: '../img/covers/projects/project1.png',
    srcset: '../img/covers/projects/project1@2x.png 2x',
    alt: 'Project 1',
  },
  {
    src: '../img/covers/projects/project2.png',
    srcset: '../img/covers/projects/project2@2x.png 2x',
    alt: 'Project 2',
  },
  {
    src: '../img/covers/projects/project3.png',
    srcset: '../img/covers/projects/project3@2x.png 2x',
    alt: 'Project 3',
  },
  {
    src: '../img/covers/projects/project4.png',
    srcset: '../img/covers/projects/project4@2x.png 2x',
    alt: 'Project 4',
  },
  {
    src: '../img/covers/projects/project5.png',
    srcset: '../img/covers/projects/project5@2x.png 2x',
    alt: 'Project 5',
  },
  {
    src: '../img/covers/projects/project6.png',
    srcset: '../img/covers/projects/project6@2x.png 2x',
    alt: 'Project 6',
  },
  {
    src: '../img/covers/projects/project7.png',
    srcset: '../img/covers/projects/project7@2x.png 2x',
    alt: 'Project 7',
  },
  {
    src: '../img/covers/projects/project8.png',
    srcset: '../img/covers/projects/project8@2x.png 2x',
    alt: 'Project 8',
  },
  {
    src: '../img/covers/projects/project9.png',
    srcset: '../img/covers/projects/project9@2x.png 2x',
    alt: 'Project 9',
  },
  {
    src: '../img/covers/projects/project10.png',
    srcset: '../img/covers/projects/project10@2x.png 2x',
    alt: 'Project 10',
  },
  {
    src: '../img/covers/projects/project1.png',
    srcset: '../img/covers/projects/project1@2x.png 2x',
    alt: 'Project 1',
  },
  {
    src: '../img/covers/projects/project2.png',
    srcset: '../img/covers/projects/project2@2x.png 2x',
    alt: 'Project 2',
  },
  {
    src: '../img/covers/projects/project3.png',
    srcset: '../img/covers/projects/project3@2x.png 2x',
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
