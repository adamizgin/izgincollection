$(function() {
	
});

function openHeader() {
	$('.mobile-header-line').eq(1).css({
		'left': '100%',
		'opacity': '0'
	});
	$('.mobile-header-line').css({
		'top': '50%'
	});
	$('.mobile-header-line').eq(0).css({
		'transform': 'translate(-50%, -50%) rotate(45deg)'
	});
	$('.mobile-header-line').eq(2).css({
		'transform': 'translate(-50%, -50%) rotate(-45deg)'
	});

	$('#header-content').show();

	setTimeout(function() {
		$('#mobile-header-button').click(closeHeader);
		$('#header-content').css({
			'opacity': '1',
			'top': '0'
		});
		$('#product-header').css({
			'height': '321px'
		});
	}, 100);
}

function closeHeader() {
	$('.mobile-header-line').eq(1).css({
		'left': '50%',
		'opacity': '1'
	});
	$('.mobile-header-line').eq(0).css({
		'top': '25%'
	});
	$('.mobile-header-line').eq(2).css({
		'top': '75%'
	});
	$('.mobile-header-line').eq(0).css({
		'transform': 'translate(-50%, -50%) rotate(0deg)'
	});
	$('.mobile-header-line').eq(2).css({
		'transform': 'translate(-50%, -50%) rotate(0deg)'
	});
	setTimeout(function() {
		$('#mobile-header-button').click(openHeader);
		$('#header-content').css({
			'opacity': '0',
			'top': '-100%'
		});
		$('#product-header').css({
			'height': '60px'
		});
	}, 100);
}
