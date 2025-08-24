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
const swiperWrapper = document.querySelector('.swiper-wrapper');

if (moreButton && swiperWrapper && window.innerWidth >= 784) {
  moreButton.addEventListener('click', function () {
    swiperWrapper.classList.toggle('expanded');
    this.classList.toggle('active');

    if (swiperWrapper.classList.contains('expanded')) {
      this.innerHTML = '<img src="image/expand.svg" alt="">скрыть';
    } else {
      this.innerHTML = '<img src="image/expand.svg" alt="">показать все';
    }
  });
}



