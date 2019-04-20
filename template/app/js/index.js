'use strict';
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    var swiper = new Swiper('.item-slider__body', {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: '.swiper__pagination',
        clickable: true,
      },
      breakpoints: {
        1366: {
          slidesPerView: 3,
          spaceBetween: 25,
          pagination: {
            el: '.swiper__pagination',
            clickable: true,
          },
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper__pagination',
            clickable: true,
          },
        },
        635: {
          slidesPerView: 1,
          spaceBetween: 15,
          pagination: {
            el: '.swiper__pagination',
            clickable: true,
          },
        },
      },  
    });
  })

})();
