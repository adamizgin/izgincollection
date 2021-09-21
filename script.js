var currentPage = "#home-page";
var prePage;
var product;

$(document).ready(function() {
	setTimeout(function() {
		$('#loading-page').hide();
	}, 300);
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
			setTimeout(function() {
				$('#home-page').css({
					'left': '50vw'
				});
				$('#products-page').css({
					'left': '150vw'
				});
				$('#settings-page').css({
					'left': '150vw'
				});
				$('#help-page').css({
					'left': '150vw'
				});
				setTimeout(function() {
					$('#products-page').hide();
					$('#settings-page').hide();
					$('#help-page').hide();
				}, 250);
			});
		} else if (currentPage == "#products-page") {
			$('#products-page').css({
				'display': 'block'
			});
			setTimeout(function() {
				$('#home-page').css({
					'left': '150vw'
				});
				$('#products-page').css({
					'left': '50vw'
				});
				$('#settings-page').css({
					'left': '150vw'
				});
				$('#help-page').css({
					'left': '150vw'
				});
				setTimeout(function() {
					$('#home-page').hide();
					$('#settings-page').hide();
					$('#help-page').hide();
				}, 250);
			});
		} else if (currentPage == "#settings-page") {
			$('#settings-page').css({
				'display': 'block'
			});
			setTimeout(function() {
				$('#home-page').css({
					'left': '150vw'
				});
				$('#products-page').css({
					'left': '150vw'
				});
				$('#settings-page').css({
					'left': '50vw'
				});
				$('#help-page').css({
					'left': '150vw'
				});
				setTimeout(function() {
					$('#home-page').hide();
					$('#products-page').hide();
					$('#help-page').hide();
				}, 250);
			});
		} else if (currentPage == "#help-page") {
			$('#help-page').css({
				'display': 'block'
			});
			setTimeout(function() {
				$('#home-page').css({
					'left': '150vw'
				});
				$('#products-page').css({
					'left': '150vw'
				});
				$('#settings-page').css({
					'left': '150vw'
				});
				$('#help-page').css({
					'left': '50vw'
				});
				setTimeout(function() {
					$('#home-page').hide();
					$('#products-page').hide();
					$('#settings-page').hide();
				}, 250);
			});
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