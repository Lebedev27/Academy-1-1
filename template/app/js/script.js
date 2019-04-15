'use strict';

/*
Все данные хранятся в браузере.
 Внутренняя память Js - heap (Мусорная куча);
 obj = null;
*/
/* Модуль начинается */
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


/* utils.js */
(function(){
  var mobileMenu = function(){
    var burgerMenu = document.querySelector('.header__burger');
    var navigationMenu = document.querySelector('.header__navigation');
    var breakPoint = window.matchMedia('(max-width: 974px)');
    console.log('Заинитился');
    if (breakPoint.matches === true) {
      console.log('Зашел в If')
      console.log(burgerMenu);
      burgerMenu.addEventListener('click', function(){
        console.log('Бургер кликнулся');
        this.classList.toggle('js-isActive'); /* Если класс есть - делает classList.remove('название класса'), если класса нету - делает classList.add('название класса') */
        navigationMenu.classList.toggle('js-isActive');
      })
    }
  };
  mobileMenu();
})();
