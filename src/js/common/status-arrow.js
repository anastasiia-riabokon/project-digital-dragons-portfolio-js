export function updStatusArrow(swiperInstance, prevBtn, nextBtn) {
  swiperInstance.isEnd
    ? nextBtn.classList.remove('active')
    : nextBtn.classList.add('active');

  swiperInstance.isBeginning
    ? prevBtn.classList.remove('active')
    : prevBtn.classList.add('active');
}
