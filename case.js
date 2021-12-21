var iphone_brands = "<option style='display: none;'>Select your phone model</option><option>iPhone 13 Pro Max</option><option>iPhone 13 Pro</option><option>iPhone 13</option><option disabled>--</option><option>iPhone 12 Pro Max</option><option>iPhone 12</option><option disabled>--</option><option>iPhone 11 Pro Max</option><option>iPhone 11</option><option disabled>--</option><option>iPhone XR</option><option disabled>--</option><option>iPhone 8 Plus</option><option>iPhone 8</option><option disabled>--</option><option>iPhone X</option><option disabled>--</option><option>iPhone 7 Plus</option><option>iPhone 7</option>"
var phoneCase = "images/phone_cases/iPhone_13_Pro_Max/empty.png";
var case_code = "";
var price = {
	brand: "",
	model: "",
	motive: "",
	price: ""
};

$(document).ready(function() {
	// Identify country
	$.get("https://ipinfo.io", function(response) {
		clientCountry = response.country;
	}, 'jsonp');

	setTimeout(function() {
		if (clientCountry == "SE") {
			price.price = "0.0kr";
		} else {
			price.price = "0.0€";
		}

		$('#calculated-price').html(price.price);
	}, 1000);

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
		if (phoneMotive !== 'Own motive') {
			if (model == 'iPhone 13 Pro Max' || model == 'iPhone 13 Pro') {
				phoneCase = "images/phone_cases/iPhone_13_Pro_Max/"+phoneMotive.replace(/ /g, '-')+".png";
			} else if (model == 'iPhone 13') {
				phoneCase = "images/phone_cases/iPhone_13/"+phoneMotive.replace(/ /g, '-')+".png";
			}








			setTimeout(function() {
				$('#case').attr('src', phoneCase);
			});
		} else {
			return false;
		}
	}
}

function calculatePrice() {
	let brand = document.querySelector('#phone-brand').value;
	let model = document.querySelector('#phone-model').value;
	let phoneMotive = document.querySelector('#phone-motive').value;

	if (brand == 'Apple – iPhone') {
		case_code = "01.";
	}

	if (model == 'iPhone 13 Pro Max') {
		case_code += "01.";
	} else if (model == 'iPhone 13 Pro') {
		case_code += "02.";
	} else if (model == 'iPhone 13') {
		case_code += "03.";
	} else if (model == 'iPhone 12 Pro Max') {
		case_code += "04.";
	} else if (model == 'iPhone 12') {
		case_code += "05.";
	} else if (model == 'iPhone 11 Pro Max') {
		case_code += "06.";
	} else if (model == 'iPhone 11') {
		case_code += "07.";
	} else if (model == 'iPhone XR') {
		case_code += "08.";
	} else if (model == 'iPhone 8 Plus') {
		case_code += "09.";
	} else if (model == 'iPhone 8') {
		case_code += "10.";
	} else if (model == 'iPhone X') {
		case_code += "11.";
	} else if (model == 'iPhone 7 Plus') {
		case_code += "12.";
	} else if (model == 'iPhone 7') {
		case_code += "13.";
	}

	if (phoneMotive == 'Lord\'s Prayer shape of a Cross') {
		case_code += "01";
	} else if (phoneMotive == 'Aramean flag horizontal') {
		case_code += "02";
	} else if (phoneMotive == 'Aramean flag horizontal Suryoyo') {
		case_code += "03";
	} else if (phoneMotive == 'Aramean flag horizontal Suryoyo in Syriac') {
		case_code += "04";
	} else if (phoneMotive == 'Aramean flag horizontal Aramean') {
		case_code += "05";
	} else if (phoneMotive == 'Aramean flag horizontal Aramean in Syriac') {
		case_code += "06";
	} else if (phoneMotive == 'Aramean flag vertical') {
		case_code += "07";
	} else if (phoneMotive == 'Assyrian flag') {
		case_code += "08";
	} else if (phoneMotive == 'Assyrian flag (color)') {
		case_code += "09";
	} else if (phoneMotive == 'Chaldean flag (color)') {
		case_code += "10";
	} else if (phoneMotive == 'Chaldean flag (color) Suryaya in Syriac') {
		case_code += "11";
	} else if (phoneMotive == 'Chaldean flag (color) Chaldean') {
		case_code += "12";
	} else if (phoneMotive == 'Chaldean flag (color) Chaldean in Syriac') {
		case_code += "13";
	}










	price.motive = case_code.slice(-2);
	$('#case-code').html(case_code);

	if (phoneMotive !== "Own motive") {
		setTimeout(function() {
			if (phoneMotive !== "Select your motive") {
				if (clientCountry == "SE") {
					price.price = "99kr";
				} else {
					price.price = "9.9€";
				}
			} else {
				if (clientCountry == "SE") {
					price.price = "0.0kr";
				} else {
					price.price = "0.0€";
				}
			}

			$('#calculated-price').html(price.price);
		});
	} else {
		if (clientCountry == "SE") {
			price.price = "199kr";
		} else {
			price.price = "19.9€";
		}

		$('#calculated-price').html(price.price);
	}
}
