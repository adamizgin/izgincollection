var currentPage = "#home-page";
var prePage;
var product;
var currentProduct = 1;
var products = {
	abun: "The Lord's Prayer in Aramaic according to Syriac tradition. This artwork includes both the traditional frame design from the ancient Syriac Church, but also the modern colours black and gold with a stone texture on a flat surface."
}
var standard = "<h2>Forex board</h2> <hr> <ol> <li>20×30 cm – 60€</li> <li>30×45 cm – 65€</li> <li>40×60 cm – 68€</li> <li>50×75 cm – 85€</li> <li>60×90 cm – 100€</li> <li>80×120 cm – 158€</li> <li>100×150 cm – 230€</li> </ol> <br> <h2>Acrylic glass</h2> <hr> <ol> <li>20×30 cm – 62€</li> <li>30×45 cm – 76€</li> <li>40×60 cm – 95€</li> <li>50×75 cm – 120€</li> <li>60×90 cm – 158€</li> <li>80×120 cm – 220€</li> <li>100×150 cm – 330€</li> </ol> <br> <h2>Acrylic aluminium glass</h2> <hr> <ol> <li>20×30 cm – 70€</li> <li>30×45 cm – 85€</li> <li>40×60 cm – 110€</li> <li>50×75 cm – 158€</li> <li>60×90 cm – 238€</li> <li>80×120 cm – 338€</li> <li>100×150 cm – 468€</li> </ol> <br><br><br> <p>Additions:</p><br> <h2>Wall mount</h2> <hr><br> <h2>Forex board:</h2> <ol> <li>screw bolts – 10€</li> <li>clamps – 10€</li> <li>invisible – 30€</li> </ol> <br> <h2>Acrylic glass:</h2> <ol> <li>crew bolts – 10€</li> <li>clamps – 10€</li> </ol> <br> <h2>Acrylic aluminium glass:</h2> <ol> <li>screw bolts – 10€</li> <li>clamps – 10€</li> <li>invisible – free (0€)</li> </ol>";

$(document).ready(function() {
	setTimeout(function() {
		$('#loading-page').hide();
	}, 300);

	$('.standard').html(standard);

	$('.abun').html(products.abun);
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
	$('.preview').click(function() {
		$('#product-info').show();
		setTimeout(function() {
			$('#product-info').css({
				'left': '0'
			});
		});
		setTimeout(function() {
			$('#pages').hide();
		}, 200);
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
});

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
		$('#pages').show();
		$('#product-info').css({
			'left': '100vw'
		});
		setTimeout(function() {
			$('#product-info').hide();
		}, 200);
	});
}

function productSwitch() {
	if (product == 1) {
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
	} else if (product == 2) {
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
}

function chooseProduct() {
	if (product == 1) {
		$('#product-1').attr('src', 'Syriac_aramaic_lords_prayer_abun_dbashmayo_1.jpg');
		$('#product-2').attr('src', 'Syriac_aramaic_lords_prayer_abun_dbashmayo_2.jpg');
	} else if (product == 2) {
		$('#product-1').attr('src', 'lords_prayer_aramaic_cross_on_wall_1.jpg');
		$('#product-2').attr('src', 'lords_prayer_aramaic_cross_on_wall_2.jpg');
	}
}
