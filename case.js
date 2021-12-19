var iphone_brands = "<option style='display: none;'>Select your phone model</option><option>iPhone 13 Pro Max</option><option>iPhone 13 Pro</option><option>iPhone 13</option><option disabled>--</option><option>iPhone 12 Pro Max</option><option>iPhone 12</option><option disabled>--</option><option>iPhone 11 Pro Max</option><option>iPhone 11</option><option disabled>--</option><option>iPhone XR</option><option disabled>--</option><option>iPhone 8 Plus</option><option>iPhone 8</option><option disabled>--</option><option>iPhone X</option><option disabled>--</option><option>iPhone 7 Plus</option><option>iPhone 7</option>"
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
	let model = document.querySelector('#phone-model').value;
	let phoneMotive = document.querySelector('#phone-motive').value;
	if (phoneMotive !== 'Select your motive') {
		if (model == 'iPhone 13 Pro Max' || model == 'iPhone 13 Pro') {
			phoneCase = "images/phone_cases/iPhone_13_Pro_Max/"+phoneMotive.replace(/ /g, '-')+".png";
		} else if (model == 'iPhone 13') {
			phoneCase = "images/phone_cases/iPhone_13/"+phoneMotive.replace(/ /g, '-')+".png";
		}








		setTimeout(function() {
			$('#case').attr('src', phoneCase);
		});
	}
}
