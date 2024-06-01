export function scrollPage(event, selectorName) {
  if (event.target.matches(selectorName)) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const targetOffset = targetSection.offsetTop;
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
      });
    }
  }
}
