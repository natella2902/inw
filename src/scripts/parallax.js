var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	overflow: true,
	delay: 1.3,
	transition: 'cubic-bezier(0,0,0,1)',
	scale: 1.9
});