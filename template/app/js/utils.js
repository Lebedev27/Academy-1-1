'use strict';
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
