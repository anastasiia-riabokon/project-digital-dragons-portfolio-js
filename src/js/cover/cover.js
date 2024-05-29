import './markup.js';

function isInViewport() {
  const coversElement = document.querySelector('.marquee__inner');

  const rect = coversElement.getBoundingClientRect();

  const viewportMiddle =
    (window.innerHeight || document.documentElement.clientHeight) / 2;

  return rect.top <= viewportMiddle && rect.bottom >= viewportMiddle;
}

function startAnimationIfVisible() {
  const marqueeInner = document.querySelectorAll('.marquee__inner');
  marqueeInner.forEach(inner => {
    if (isInViewport(inner)) {
      inner.classList.add('animate');
    } else {
      inner.classList.remove('animate');
    }
  });
}

window.addEventListener('scroll', startAnimationIfVisible);

startAnimationIfVisible();
