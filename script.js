var swiper = new Swiper('.mySwiper', {
   slidesPerView: 'auto', // показывает полностью активный и частично следующий
  spaceBetween: 20, 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//"показать все"
const moreButton = document.querySelector('.more');
const sliderTrack = document.querySelector('.slider-track');

if (moreButton && sliderTrack && window.innerWidth >= 784) {
  moreButton.addEventListener('click', function () {
    sliderTrack.classList.toggle('expanded');
    this.classList.toggle('active');

    if (sliderTrack.classList.contains('expanded')) {
      this.innerHTML = '<img src="image/expand.svg" alt="">скрыть';
    } else {
      this.innerHTML = '<img src="image/expand.svg" alt="">показать все';
    }
  });
}



