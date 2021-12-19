var iphone_brands = "<option style='display: none;'>Select your phone model</option><option>iPhone 13 Pro Max</option><option>iPhone 13 Pro</option><option>iPhone 13 Pro mini</option><option>iPhone 13</option><option disabled>--</option><option>iPhone 12 Pro Max</option><option>iPhone 12 Pro</option><option>iPhone 12 Pro mini</option><option>iPhone 12</option><option disabled>--</option><option>iPhone SE (2020)</option><option disabled>--</option><option>iPhone 11 Pro Max</option><option>iPhone 11 Pro</option><option>iPhone 11</option><option disabled>--</option><option>iPhone XR</option><option disabled>--</option><option>iPhone XS Max</option><option>iPhone XS</option><option disabled>--</option><option>iPhone 8 Plus</option><option>iPhone 8</option><option disabled>--</option><option>iPhone X</option><option disabled>--</option><option>iPhone 7 Plus</option><option>iPhone 7</option><option disabled>--</option><option>iPhone SE</option><option disabled>--</option><option>iPhone 6s Plus</option><option>iPhone 6s</option><option>iPhone 6 Plus</option><option>iPhone 6</option><option disabled>--</option><option>iPhone 5s</option><option>iPhone 5c</option><option>iPhone 5</option><option disabled>--</option><option>iPhone 4s</option><option>iPhone 4</option>"
var phoneCase = "images/phone_cases/iPhone_160-8x78-1x7-4.png";

$(document).ready(function() {
	$('#phone-brand').on('change', function() {
		setTimeout(function() {
			$('#phone-model').removeAttr('disabled');

			if (document.querySelector('#phone-brand').value == "Apple – iPhone") {
				$('#phone-model').html(iphone_brands);
			}
		});
	});

	$('#phone-model').change(function() {
		if (document.querySelector('#phone-brand').value) {
			$('#phone-motive').removeAttr('disabled', 'false');
		}
	});
});









// change picture of phone case to selected motive
function motive() {
	if (document.querySelector('#phone-motive').value == 'Aramean flag: horiz.') {
		phoneCase = "images/phone_cases/iPhone_160-8x78-1x7-4_Aramean-flag-horizontal.png";
	} else if (document.querySelector('#phone-motive').value == 'Aramean flag: horiz. with "SURYOYO"') {
		phoneCase = "images/phone_cases/iPhone_160-8x78-1x7-4_Aramean-flag-horizontal_SURYOYO.png";
	} else if (document.querySelector('#phone-motive').value == 'Aramean flag: horiz. with "SURYOYO" in Syriac') {
		phoneCase = "images/phone_cases/iPhone_160-8x78-1x7-4_Aramean-flag-horizontal_SURYOYO_syriac.png";
	} else if (document.querySelector('#phone-motive').value == 'Aramean flag: horiz. with "SURYAYA"') {
		phoneCase = "images/phone_cases/iPhone_160-8x78-1x7-4_Aramean-flag-horizontal_SURYAYA.png";
	} else if (document.querySelector('#phone-motive').value == 'Aramean flag: horiz. with "ARAMEAN"') {
		phoneCase = "images/phone_cases/iPhone_160-8x78-1x7-4_Aramean-flag-horizontal_ARAMEAN.png";
	} else if (document.querySelector('#phone-motive').value == 'Aramean flag: horiz. with "ARAMEAN" in Syriac') {
		phoneCase = "images/phone_cases/iPhone_160-8x78-1x7-4_Aramean-flag-horizontal_ARAMEAN_syriac.png";
	} else if (document.querySelector('#phone-motive').value == 'Aramean flag: horiz. with "SYRIAC"') {
		phoneCase = "images/phone_cases/iPhone_160-8x78-1x7-4_Aramean-flag-horizontal_SYRIAC.png";
	} else if (document.querySelector('#phone-motive').value == 'Aramean flag: vertical') {
		phoneCase = "images/phone_cases/iPhone_160-8x78-1x7-4_Aramean-flag-vertical.png";
	}








	setTimeout(function() {
		$('#case').attr('src', phoneCase);
	});
}