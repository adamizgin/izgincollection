var currentPage = "#home-page";
var prePage;
var product;
var currentProduct = 1;
var compDir;
var products = {
	abun: "The Lord's Prayer in Aramaic according to Syriac tradition. This artwork includes both the traditional frame design from the ancient Syriac Church, but also the modern colours black and gold with a stone texture on a flat surface.",
	abun2: "The Lord's Prayer in Aramaic according to Syriac tradition – Shape of a Cross. This artwork includes both the traditional frame design from the ancient Syriac Church, but also the modern colours black and gold with a stone texture on a flat surface.",
	maryJesus: "Icon of Mary and Jesus with a customizable Bible verse below the icon. The border design is as according to Syriac tradition but with a modern gold design and a stone texture.",
	abun3: "<b>HANDWRITTEN</b> – Lord's prayer standing (portrait) with a modern design and classic according to Syriac Church traditions.",
	abun4: "<b>HANDWRITTEN</b> – Lord's prayer standing (portrait) with a modern design. This lighter colour of gold is great for anyone who does not want the painting to stick out as much as the previous darker golden colour. Hence why the border is also modified with a thinner and a new modern look.",
	abun5: "The Bible verse <b>John 3:16</b> written in Aramaic with a large Cross above. The painting has a modern design with a modern golden frame."
}
var specs = {
	standard: "<h2>Forex board</h2> <hr> <ol> <li>20×30 cm – 59.9€</li> <li>30×45 cm – 65€</li> <li>40×60 cm – 68€</li> <li>50×75 cm – 85€</li> <li>60×90 cm – 100€</li> <li>80×120 cm – 158€</li> <li>100×150 cm – 230€</li> </ol> <br> <h2>Acrylic aluminium glass</h2> <hr> <ol> <li>20×30 cm – 70€</li> <li>30×45 cm – 85€</li> <li>40×60 cm – 110€</li> <li>50×75 cm – 158€</li> <li>60×90 cm – 238€</li> <li>80×120 cm – 338€</li> <li>100×150 cm – 468€</li> </ol> <br><br><br> <p>Additions:</p><br> <h2>Wall mount</h2> <hr><br> <h2>Forex board:</h2> <ol><li>invisible – 30€</li> </ol> <br> <h2>Acrylic aluminium glass:</h2> <ol> <li>invisible – free (0€)</li> </ol>",
	semiPremium: "<h2>Forex board</h2> <hr> <ol> <li>20×30 cm – 64.9€</li> <li>30×45 cm – 70€</li> <li>40×60 cm – 73€</li> <li>50×75 cm – 90€</li> <li>60×90 cm – 105€</li> <li>80×120 cm – 163€</li> <li>100×150 cm – 235€</li> </ol> <br> <h2>Acrylic aluminium glass</h2> <hr> <ol> <li>20×30 cm – 75€</li> <li>30×45 cm – 90€</li> <li>40×60 cm – 115€</li> <li>50×75 cm – 163€</li> <li>60×90 cm – 243€</li> <li>80×120 cm – 343€</li> <li>100×150 cm – 473€</li> </ol> <br><br><br> <p>Additions:</p><br> <h2>Wall mount</h2> <hr><br> <h2>Forex board:</h2> <ol><li>invisible – 30€</li> </ol> <br> <h2>Acrylic aluminium glass:</h2><ol><li>invisible – free (0€)</li> </ol>"
}
var rabatt = true;
var clientCountry;
var price = {
	standard: 599,
	semiPremium: 649,
	case: 99,

	rabatt_standard: 1078,
	rabatt_semiPremium: 1168,
	rabatt_case: 99
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
		$('.orig-price').css({
			'color': '#0008',
			'text-decoration': 'line-through'
		});
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

			if (rabatt == true) {
				$('.rabatt-price-standard').html(price.rabatt_standard+'kr');
				$('.rabatt-price-semi_premium').html(price.rabatt_semiPremium+'kr');
				$('.rabatt-case-price').html(price.rabatt_case+'kr');
			}
		} else {
			$('.standard-price').html(price.standard/10+'€');
			$('.semi_premium-price').html(price.semiPremium/10+'€');
			$('.case-price').html(price.case/10+'€');
			$('.case-price').html(price.rabatt_case/10+'kr');

			if (rabatt == true) {
				$('.rabatt-price-standard').html(price.rabatt_standard/10+'€');
				$('.rabatt-price-semi_premium').html(price.rabatt_semiPremium/10+'€');
				$('.rabatt-case-price').html(price.rabatt_case/10+'€');
			}
		}
	}, 500);










	// Loading page hide
	setTimeout(function() {
		$('#loading-page').hide();
	}, 300);










	window.scrollTo(0, 0);

	$('.standard').html(specs.standard);
	$('.semi-premium').html(specs.semiPremium);

	$('.abun').html(products.abun);
	$('.abun2').html(products.abun2);
	$('.abun3').html(products.maryJesus);
	$('.abun4').html(products.abun3);
	$('.abun5').html(products.abun4);
	$('.abun6').html(products.abun5);












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

	$('.buy-button').click(purchase);
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






function changePage() {
	setTimeout(function() {
		if (currentPage == "#home-page") {
			$('#home-page').css({
				'display': 'block'
			});
			$('#products-page').css({
				'left': '150vw'
			});
			$('#contact-page').css({
				'left': '150vw'
			});
			$('#help-page').css({
				'left': '150vw'
			});
			setTimeout(function() {
				$('#home-page').css({
					'left': '50vw'
				});
				setTimeout(function() {
					$('#products-page').hide();
					$('#contact-page').hide();
					$('#help-page').hide();
				}, 250);
			}, 100);
		} else if (currentPage == "#products-page") {
			$('#products-page').css({
				'display': 'block'
			});
			$('#home-page').css({
				'left': '150vw'
			});
			$('#contact-page').css({
				'left': '150vw'
			});
			$('#help-page').css({
				'left': '150vw'
			});
			setTimeout(function() {
				$('#products-page').css({
					'left': '50vw'
				});
				setTimeout(function() {
					$('#home-page').hide();
					$('#contact-page').hide();
					$('#help-page').hide();
				}, 250);
			}, 100);
		} else if (currentPage == "#contact-page") {
			$('#contact-page').css({
				'display': 'block'
			});
			$('#home-page').css({
				'left': '150vw'
			});
			$('#products-page').css({
				'left': '150vw'
			});
			$('#help-page').css({
				'left': '150vw'
			});
			setTimeout(function() {
				$('#contact-page').css({
					'left': '50vw'
				});
				setTimeout(function() {
					$('#home-page').hide();
					$('#products-page').hide();
					$('#help-page').hide();
				}, 250);
			}, 100);
		} else if (currentPage == "#help-page") {
			$('#help-page').css({
				'display': 'block'
			});
			$('#home-page').css({
				'left': '150vw'
			});
			$('#products-page').css({
				'left': '150vw'
			});
			$('#contact-page').css({
				'left': '150vw'
			});
			setTimeout(function() {
				$('#help-page').css({
					'left': '50vw'
				});
				setTimeout(function() {
					$('#home-page').hide();
					$('#products-page').hide();
					$('#contact-page').hide();
				}, 250);
			}, 100);
		}
	});
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





function productSwitch() {
	setTimeout(function() {
		if (currentProduct == 0) {
			currentProduct = 2;
		} else if (currentProduct == 3) {
			currentProduct = 1;
		}

		if (currentProduct == 1) {
			setTimeout(function() {
				$('#product-wrapper-1-1').css({
					'left': '0'
				});
				$('#product-wrapper-1-2').css({
					'left': '100%'
				});
			});
		} else if (currentProduct == 2) {
			setTimeout(function() {
				$('#product-wrapper-1-1').css({
					'left': '-100%'
				});
				$('#product-wrapper-1-2').css({
					'left': '0'
				});
			}, );
		}
	});
}







function chooseProduct() {

	if (product == 1) {
		$('#product-1').attr('src', 'images/Syriac_aramaic_lords_prayer_abun_dbashmayo_1.jpg');
		$('#product-2').attr('src', 'images/Syriac_aramaic_lords_prayer_abun_dbashmayo_2.jpg');
		$('#product-content .abun').html(products.abun);
		$('.product-h3').html('Lord\'s prayer');
	} else if (product == 2) {
		$('#product-1').attr('src', 'images/lords_prayer_aramaic_cross_on_wall_1.jpg');
		$('#product-2').attr('src', 'images/lords_prayer_aramaic_cross_on_wall_2.jpg');
		$('#product-content .abun').html(products.abun2);
		$('.product-h3').html('Lord\'s prayer – Cross shaped');
	} else if (product == 3) {
		$('#product-1').attr('src', 'images/Mary_and_Jesus_icon_aramaic_1.jpg');
		$('#product-2').attr('src', 'images/Mary_and_Jesus_icon_aramaic_2.jpg');
		$('#product-content .abun').html(products.maryJesus);
		$('.product-h3').html('Jesus and Mary – Choose your own verse');
	} else if (product == 4) {
		$('#product-1').attr('src', 'images/handwritten_lords_prayer_standing_in_room_1.jpg');
		$('#product-2').attr('src', 'images/handwritten_lords_prayer_standing_in_room_2.jpg');
		$('#product-content .abun').html(products.abun3);
		$('.product-h3').html('HANDWRITTEN – Lord\'s prayer standing');
	} else if (product == 5) {
		$('#product-1').attr('src', 'images/Lords_prayer_handwritten_light_gold_standing_in_room_1.jpg');
		$('#product-2').attr('src', 'images/Lords_prayer_handwritten_light_gold_standing_in_room_2.jpg');
		$('#product-content .abun').html(products.abun4);
		$('.product-h3').html('HANDWRITTEN – Lord\'s prayer light gold');
	} else if (product == 6) {
		$('#product-1').attr('src', 'images/john_3_16_1.jpg');
		$('#product-2').attr('src', 'images/john_3_16_2.jpg');
		$('#product-content .abun').html(products.abun5);
		$('.product-h3').html('John 3:16 Bible verse with Cross');
	}
}








function standard() {
	$('.semi-premium').hide();
	$('.standard').show();
}
function semiPremium() {
	$('.semi-premium').show();
	$('.standard').hide();
}









// BUY PRODUCT
// REDIRECT
function purchase() {
	if (item == 1) {
		sessionStorage.setItem('product', '1');
	} else if (item == 2) {
		sessionStorage.setItem('product', '2');
	} else if (item == 3) {
		sessionStorage.setItem('product', '3');
	} else if (item == 4) {
		sessionStorage.setItem('product', '4');
	} else if (item == 5) {
		sessionStorage.setItem('product', '5');
	} else if (item == 6) {
		sessionStorage.setItem('product', '6');
	} else if (item == 7) {
		sessionStorage.setItem('product', '7');
	} else if (item == 8) {
		sessionStorage.setItem('product', '8');
	} else if (item == 9) {
		sessionStorage.setItem('product', '9');
	} else if (item == 10) {
		sessionStorage.setItem('product', '10');
	}




	window.open('../purchase.html');
}
