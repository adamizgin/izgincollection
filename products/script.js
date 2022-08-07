var currentPage = "#home-page";
var prePage;
var product;
var currentProduct = 1;
var compDir;
var rabatt = false;
var clientCountry;
var price = {
	standard: 599,
	semiPremium: 649,
	case: 219,
	car: 199,
	hoodie: 329,
	polo: 199,
	rosary: 249,
	spiga_cross: 199,

	rabatt_standard: 1078,
	rabatt_semiPremium: 1168,
	rabatt_case: 149,
	rabatt_car: 149,
	rabatt_clothes: 299,
}

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










	// Identify country
	$.get("https://ipinfo.io", function(response) {
		clientCountry = response.country;
	}, 'jsonp');









	// Set currency
	setTimeout(function() {
		if (clientCountry == 'SE') {
			$('.standard-price').html(price.standard+'kr');
			$('.semi_premium-price').html(price.semiPremium+'kr');
			$('.case-price').html(price.case+'kr');
			$('.car-price').html(price.car+'kr');
			$('.hoodie-price').html(price.hoodie+'kr');
			$('.polo-price').html(price.polo+'kr');
			$('.rosary-price').html(price.rosary+'kr');
			$('.spiga-cross-price').html(price.spiga_cross+'kr');

			if (rabatt == true) {
				$('.rabatt-price-standard').html(price.rabatt_standard+'kr');
				$('.rabatt-price-semi_premium').html(price.rabatt_semiPremium+'kr');
				$('.rabatt-case-price').html(price.rabatt_case+'kr');
				$('.car-price').html(price.rabatt_car+'kr');
				$('.hoodie-price').html(price.hoodie+'kr');
			}
		} else {
			$('.standard-price').html(price.standard/10+'€');
			$('.semi_premium-price').html(price.semiPremium/10+'€');
			$('.case-price').html(price.case/10+'€');
			$('.case-price').html(price.rabatt_case/10+'€');
			$('.car-price').html(price.car/10+'€');
			$('.hoodie-price').html(price.hoodie/10+'€');
			$('.polo-price').html(price.polo/10+'€');
			$('.rosary-price').html(price.rosary/10+'€');
			$('.spiga-cross-price').html(price.spiga_cross/10+'€');

			if (rabatt == true) {
				$('.rabatt-price-standard').html(price.rabatt_standard/10+'€');
				$('.rabatt-price-semi_premium').html(price.rabatt_semiPremium/10+'€');
				$('.rabatt-case-price').html(price.rabatt_case/10+'€');
				$('.car-price').html(price.rabatt_car/10+'€');
				$('.hoodie-price').html(price.hoodie/10+'€');
			}
		}
	}, 500);










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
