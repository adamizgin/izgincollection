var currentPage = "#home-page";
var prePage;
var product;
var currentProduct = 1;
var products = {
	abun: "The Lord's Prayer in Aramaic according to Syriac tradition. This artwork includes both the traditional frame design from the ancient Syriac Church, but also the modern colours black and gold with a stone texture on a flat surface."
}

$(document).ready(function() {
	setTimeout(function() {
		$('#loading-page').hide();
	}, 300);
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
	}
}
