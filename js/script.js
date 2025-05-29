/******************************************************************************************************************************
Waypoints
*******************************************************************************************************************************/ 

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

	// Close menu when clicking menu links
	$('.icon-list a').on('click', function() {
		$('body').removeClass('show-menu');
		return true;
	});

});

/******************************************************************************************************************************
Nav Button
*******************************************************************************************************************************/ 

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});


$(function() {
	// Only handle links with hash symbols for smooth scrolling
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 125
				}, 1000);
				return false;
			}
		}
	});
});

/******************************************************************************************************************************
Nav Transform
*******************************************************************************************************************************/ 

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/******************************************************************************************************************************
Flexsliders
*******************************************************************************************************************************/ 

$(window).load(function() {

	$('#blogSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});
	
		$('#clientSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});

// Function to check if device is mobile
function isMobile() {
	return window.innerWidth <= 768;
}

document.addEventListener('DOMContentLoaded', function() {
	// Get menu elements
	const menu = document.querySelector('.menu-wrap');
	const menuLinks = document.querySelectorAll('.menu a');
	
	// Handle menu link clicks on mobile
	menuLinks.forEach(link => {
		link.addEventListener('click', function(e) {
			if (isMobile()) {
				// Close menu by removing 'show-menu' class
				document.body.classList.remove('show-menu');
				
				// Add a small delay to ensure smooth transition
				setTimeout(() => {
					menu.style.transform = 'translate3d(-320px,0,0)';
				}, 100);
			}
		});
	});
});

