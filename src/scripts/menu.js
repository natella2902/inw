const openBtn = document.querySelector('.app-menu__link');
const menu = document.querySelector('.hover-menu');


openBtn.addEventListener('mouseenter', function(e) {
  e.preventDefault();
  menu.style["display"] = 'flex';

});

menu.addEventListener('mouseleave', function() {
  menu.style['display'] = 'none';
  console.log('!!!!');
});

