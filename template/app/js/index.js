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
    });
  })

})();
