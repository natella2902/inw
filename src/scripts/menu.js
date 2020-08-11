const openBtn = document.querySelector('.app-menu__link');
const menu = document.querySelector('.hover-menu');
const openBurger = document.querySelector('.menu__button');


openBtn.addEventListener('mouseenter', function(e) {
  e.preventDefault();
  menu.style["display"] = 'flex';

});

menu.addEventListener('mouseleave', function() {
  menu.style['display'] = 'none';
});


// openBurger.addEventListener('click', function(e) {
//   e.preventDefault();
//   menu.style["display"] = 'flex';
//   console.log('!!!!!');
// });



