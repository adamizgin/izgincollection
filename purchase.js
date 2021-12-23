$(document).ready(function() {
	$('#home-button').click(() => {
		window.close();
	});

	if (sessionStorage.getItem('product')) {
		$('#p-'+sessionStorage.getItem('product')).show();
	} else {
		setTimeout(function() {
			window.close();
		}, 500);
	}

	setTimeout(function() {
		sessionStorage.removeItem('product');
	});
});
