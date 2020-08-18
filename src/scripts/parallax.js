var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	overflow: true,
	delay: 1.7,
	transition: 'cubic-bezier(0,0,0,1)',
	scale: 1.9
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
	selector: ".layer",
	frictionX: 0.04,
	frictionY: 0.04
});

var paymentScene = document.getElementById('paymentscene');
var parallaxInstance = new Parallax(paymentScene, {
	selector: ".layer",
	frictionX: 0.04,
	frictionY: 0.04
});