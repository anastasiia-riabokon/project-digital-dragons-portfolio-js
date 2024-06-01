export function btnClickForLink(e) {
  e.preventDefault();
  smoothScrollTo('lets-work-together');
}

function smoothScrollTo(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}
