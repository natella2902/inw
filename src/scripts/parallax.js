var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	overflow: true,
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)',
	scale: 1.5
});