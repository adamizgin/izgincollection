var currentPage = "#home-page";
var prePage;
var product;
var compDir;
var rabatt = false;
var clientCountry;

var item;

$(document).ready(function() {



	// Christmas sale popup
	if (sessionStorage) {
		if (sessionStorage.getItem('closed') == 'closed') {
			$('#rabatt').css({
				'display': 'none'
			});
		}
	}










	if (rabatt == true) {
		$('#rabatt').show();
		$('.orig-price').css({
			'color': '#0008',
			'text-decoration': 'line-through'
		});
	} else {
		$('#rabatt').hide();
		$('.rabatt-span').hide();
	}










	// Loading page hide
	setTimeout(function() {
		$('#loading-page').hide();
	}, 300);










	window.scrollTo(0, 0);












	$('#ham').click(function() {
		$('#menu').css({
			'display': 'block'
		});
		setTimeout(function() {
			$('#menu').css({
				'left': '0'
			});
			$(currentPage).css({
				'left': '80%'
			});
			$('#menu-stop').fadeIn(150);
			$('html').css({
				'overflow-y': 'hidden'
			});
		});
	});






	$('.header-button').on('click', function() {
		$hano = $(this);
			$(this).find('.header-animation').show();
			$(this).find('.header-animation').css({
				'height': '0',
				'transition': 'none'
			});
			setTimeout(function() {
				$hano.find('.header-animation').css({
					'transition': 'height 250ms ease-in-out'
				});
				setTimeout(function() {
					$hano.find('.header-animation').css({
						'height': '100%'
					});
					setTimeout(function() {
						$hano.find('.header-animation').fadeOut();
					}, 450);
				});
			});
	});






	$('#rabatt-close').click(function() {
		setTimeout(function() {
			$('#rabatt-container').css({
				'top': '-50px',
				'opacity': 0
			});
			setTimeout(function() {
				$('#rabatt').fadeOut();
			}, 500);
		});

		sessionStorage.setItem('closed', 'closed');
	});
});










// Functions

function closeMenuButton() {
	$('#menu').css({
		'left': '-75%'
	});
	setTimeout(function() {
		$('#menu').css({
			'display': 'none'
		});
		$('#menu-stop').fadeOut(150);
		$('html').css({
			'overflow-y': 'auto'
		});
	}, 200);
}





function closeMenu() {
	$('#menu').css({
		'left': '-75%'
	});
	$(currentPage).css({
		'left': '50%'
	});
	setTimeout(function() {
		$('#menu').css({
			'display': 'none'
		});
		$('#menu-stop').fadeOut(150);
		$('html').css({
			'overflow-y': 'auto'
		});
	}, 200);
}








function back() {
	setTimeout(function() {
		if (history.back()) {
			history.back();
		} else {
			window.open('https://www.izgincollection.com/index.html', '_self');
		}
	});
}
