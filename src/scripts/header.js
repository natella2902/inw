// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
	didScroll = true;
});

setInterval(function () {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 100);

function hasScrolled() {
	var st = $(this).scrollTop();

	console.log(st);

	// Make sure they scroll more than delta
	if (Math.abs(lastScrollTop - st) <= delta)
		return;

	// If they scrolled down and are past the navbar, add class .nav-up.
	// This is necessary so you never see what is "behind" the navbar.
	if (st > lastScrollTop && st > navbarHeight) {
		// Scroll Down
		$('header').removeClass('nav-down').addClass('nav-up');
		console.log('nav-up // вниз')
	} else {
		// Scroll Up
		if (st + $(window).height() < $(document).height()) {
			$('header').removeClass('nav-up').addClass('nav-down');
			console.log('nav-down // вверх')
		}

		if (lastScrollTop < 200) {
			$('header').removeClass('nav-up').removeClass('nav-down');
		}
	}

	lastScrollTop = st;
}