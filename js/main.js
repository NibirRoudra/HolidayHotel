/*--/ Navbar Menu Reduce 1 /--*/
var nav = $('nav');
var navHeight = nav.outerHeight();

$('.navbar-toggler').on('click', function () {
	if (!$('#mainNav').hasClass('navbar-reduce')) {
		$('#mainNav').addClass('navbar-reduce');
	}
})

/*--/ Navbar Menu Reduce 2/--*/
$(window).trigger('scroll');
$(window).on('scroll', function () {
	var pixels = 50;
	var top = 1200;
	if ($(window).scrollTop() > pixels) {
		$('.navbar').addClass('navbar-reduce');
		$('.navbar').removeClass('mainNav');
	} else {
		if (!$('.custom-menu').hasClass('show')) {
			$('.navbar').removeClass('navbar-reduce');
		}
		$('.navbar').addClass('mainNav');
	}

});

// HAMBURGER MOBILE MENU
var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.mobile-menu');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});

$('.mobile-menu li a').click(function () {
		$('.mobile-menu').removeClass("toggle");
	});

// ACTIVE MENU WHEN CLICK MENU
$(document).ready(function () {
	$('.custom-menu li a').click(function () {
		$('.custom-menu li a').removeClass("active");
		$(this).addClass("active");
	});

	$('.logo-brand').click(function () {
		$('.custom-menu li a').removeClass("active");
	});

	//In Mobile Menu
	$('.mobile-menu li a').click(function () {
		$('.mobile-menu li a').removeClass("active");
		$(this).addClass("active");

		$('.logo-brand').click(function () {
			$('.mobile-menu li a').removeClass("active");
		});
	});
});


/*--/ Activate scrollspy to add active class to navbar items on scroll /--*/
$('body').scrollspy({
	target: '#mainNav',
	offset: navHeight
});

/*--/ Star Scrolling nav /--*/
var mainNav_height = $('#mainNav').outerHeight() - 22;
$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			var scrollto = target.offset().top - mainNav_height;
			$('html, body').animate({
				scrollTop: scrollto
			}, 1000, "easeInOutExpo");
			return false;
		}
	}
});

//THUMB NAV GALLERY IMAGE
$('.container-gallery').gallery({
	height: 500,
	items: 6,
	thumbHeight: 150,
	items: 3,
});

/*$('.container-gallery').gallery({
	customControls: {
		prevButton: prevContent,
		nextButton: nextContent
	}
});*/

// VENO BOX GALLERY PORTFOLIO FILTER AND SLIDER IFRAME
$(document).ready(function () {
	$('.venobox').venobox({
		'share': false
	});
});
