const openBtn = document.querySelector('.app-menu__link');
const menu = document.querySelector('.hover-menu');
const openBurger = document.querySelector('#menu__toggle');


openBtn.addEventListener('mouseenter', function (e) {
  e.preventDefault();
  menu.style["display"] = 'flex';

});

menu.addEventListener('mouseleave', function () {
  menu.style['display'] = 'none';
});


openBurger.addEventListener('click', function (e) {
  if (e.currentTarget.checked) {
    menu.style["display"] = 'flex';
  } else {
    menu.style["display"] = 'none';
  }

});



