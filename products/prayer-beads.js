var usage;

$(function() {
	if (!usage) {
		usage = 1;
	}

	define_usage();

	$('.product-options h2:first-child').click(function() {
		usage = 1;
		define_usage();
	});
	$('.product-options h2:last-child').click(function() {
		usage = 2;
		define_usage();
	});
});

function define_usage() {
	$('.product-options h2').css({
		'color': '#555'
	});

	if (usage == 1) {
		$('.product-options h2:first-child').css({
			'color': '#d60'
		});
	} else if (usage == 2) {
		$('.product-options h2:last-child').css({
			'color': '#d60'
		});
	}
}