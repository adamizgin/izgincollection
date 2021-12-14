$(document).ready(function() {
	if ($('.rellax')) {
		relax = new Rellax('.rellax');
	}
	window.scrollTo(0, 0);

	$(document).on('scroll', function() {
		arhesh = $(this).scrollTop();
		SH = $('.main-computer').height() / 2 - 100;
		if (arhesh >= SH) {
			$('#comp-header').css({
				'background': '#fff',
				'box-shadow': '0 0 10px 0 #0003'
			});
			$('#comp-header h3, #comp-header i').css({
				'color': '#000'
			});
			$('#comp-logo').css({
				'-webkit-filter': 'none',
				'filter': 'none'
			});
			// $('.hamLine').css({
			// 	'background': '#000'
			// });
		} else {
			$('#comp-header').css({
				'background': 'transparent',
				'box-shadow': 'none'
			});
			$('#comp-header h3, #comp-header i').css({
				'color': '#fff'
			});
			$('#comp-logo').css({
				'-webkit-filter': 'invert(100%)',
				'filter': 'invert(100%)'
			});
			// $('.hamLine').css({
			// 	'background': '#fff'
			// });
		}
	});
});