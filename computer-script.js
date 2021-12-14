$(document).ready(function() {
	$('.header-button').click(function() {
		if ("https://www.izgincollection.com/" + compDir == window.location.href || "file:///Users/testkonto/Desktop/Websites/IzginCollection/" + compDir == window.location.href) {
			return false;
		} else {
			setTimeout(function() {
				location.href = compDir;
			}, 250);
		}
	});
});