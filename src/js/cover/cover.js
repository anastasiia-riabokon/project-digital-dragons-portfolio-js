import './markup.js';

function isInViewport() {
  const coversElement = document.querySelector('.marquee__inner');

  const rect = coversElement.getBoundingClientRect();
  const containerTop = rect.top;
  const containerBottom = rect.bottom;
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const bottomThreshold = containerBottom - viewportHeight;
  const topThreshold = containerTop + viewportHeight;
  return bottomThreshold <= 0 && topThreshold >= 0;

  //   const viewportMiddle =
  //     (window.innerHeight || document.documentElement.clientHeight) / 50;

  //   return rect.top < viewportMiddle && rect.bottom > viewportMiddle;
}

function startAnimation(e) {
  if (isInViewport(e)) {
    e.classList.add('animate');
  } else {
    e.classList.remove('animate');
  }
}

function startAnimationIfVisible() {
  const marqueeInner = document.querySelector('.marquee__inner');
  const marqueeInnerOne = document.querySelector('.marquee__inner_one');
  const marqueeInnerTwo = document.querySelector('.marquee__inner_two');
  const marqueeInnerThree = document.querySelector('.marquee__inner_three');

  startAnimation(marqueeInner);
  startAnimation(marqueeInnerOne);
  startAnimation(marqueeInnerTwo);
  startAnimation(marqueeInnerThree);
}

window.addEventListener('scroll', startAnimationIfVisible);

startAnimationIfVisible();
