// параллакс для слайдинга монеток на странице global card
var images = document.getElementsByClassName('thumbnail');

for (let i = 0; i < images.length; i++) {
	new simpleParallax(images[i], {
		overflow: true,
		delay: 1.7,
		transition: 'cubic-bezier(0,0,0,1)',
		scale: 1.9
	});
}
