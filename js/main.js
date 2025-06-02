$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});


/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Set active menu item based on current page
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    $('.icon-list a').each(function() {
        var href = $(this).attr('href');
        if (href === currentPage) {
            $(this).addClass('active');
        }
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {
	var bodyEl = document.body,
		menuWrap = document.querySelector('.menu-wrap'),
		openbtn = document.getElementById('open-button'),
		isOpen = false;

	function init() {
		initEvents();
		// Only restore menu state if it was explicitly opened
		if (sessionStorage.getItem('menuOpen') === 'true') {
			toggleMenu();
		} else {
			// Ensure menu starts hidden
			menuWrap.style.height = '0px';
			classie.remove(bodyEl, 'show-menu');
		}
	}

	function initEvents() {
		openbtn.addEventListener('click', function(ev) {
			ev.stopPropagation();
			toggleMenu();
		});
		
		// Close menu when clicking outside
		document.addEventListener('click', function(ev) {
			if (isOpen && !menuWrap.contains(ev.target) && ev.target !== openbtn) {
				toggleMenu();
			}
		});
	}

	function toggleMenu() {
		if (isOpen) {
			classie.remove(bodyEl, 'show-menu');
			menuWrap.style.height = '0px';
			sessionStorage.setItem('menuOpen', 'false');
		} else {
			classie.add(bodyEl, 'show-menu');
			menuWrap.style.height = window.innerWidth <= 767 ? 'auto' : '75px';
			sessionStorage.setItem('menuOpen', 'true');
		}
		isOpen = !isOpen;
	}

	init();

})();


/******************************************************************************************************************************
Auto-Close Menu on Mobile Page Navigation
*******************************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.icon-list a');

  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 767) {
        document.body.classList.remove('show-menu');
        const menuWrap = document.querySelector('.menu-wrap');
        if (menuWrap) {
          menuWrap.style.height = '0px';
        }
        sessionStorage.setItem('menuOpen', 'false');
      }
    });
  });
});

