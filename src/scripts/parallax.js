// параллакс для слайдинга монеток на странице global card
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	overflow: true,
	delay: 1.7,
	transition: 'cubic-bezier(0,0,0,1)',
	scale: 1.9
});

// параллакс для движения мышью

// global card
var scene = document.getElementsByClassName('scene');
new Parallax(scene, {
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

// payment methods

var payMethods = document.getElementById('paymethodscene');
var parallaxInstance = new Parallax(payMethods, {
	selector: ".layer",
	frictionX: 0.04,
	frictionY: 0.04
});

// online payments 

var onlineScene = document.getElementById('onlinescene');
var parallaxInstance = new Parallax(onlineScene, {
	selector: ".layer",
	frictionX: 0.04,
	frictionY: 0.04
});

// omni

var omniScene = document.getElementById('omniscene');
var parallaxInstance = new Parallax(omniScene, {
	selector: ".layer",
	frictionX: 0.04,
	frictionY: 0.04
});

// checkout

var checkScene = document.getElementById('checkscene');
var parallaxInstance = new Parallax(checkScene, {
	selector: ".layer",
	frictionX: 0.04,
	frictionY: 0.04
});