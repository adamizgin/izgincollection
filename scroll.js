$(document).ready(function() {
	window.scrollTo(0, 0);

	$('#decoration-anchor').click(function() {
		$('html, body').animate({
			scrollTop: $("#decoration").offset().top - 150
		}, 500);
	});
	$('#case-and-accessories-anchor').click(function() {
		$('html, body').animate({
			scrollTop: $("#case-and-accessories").offset().top - 150
		}, 1000);
	});
	$('#clothes-anchor').click(function() {
		$('html, body').animate({
			scrollTop: $("#clothes").offset().top - 150
		}, 1250);
	});







	$(window).on('scroll', function() {
		if ($(window).scrollTop() > $('#home-page-computer').innerHeight() - $('#comp-header').innerHeight()) {
			$('#comp-header').css({
				'background': '#000c'
			});
		} else {
			$('#comp-header').css({
				'background': '#0005'
			});
		}
	});
});
