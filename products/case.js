var iphone_brands = "<option style='display: none;'>Select your phone model</option><option>iPhone 13 Pro Max</option><option>iPhone 13 Pro</option><option>iPhone 13</option> <option disabled>--</option><option>iPhone 12 Pro Max</option><option>iPhone 12 (Pro)</option><option disabled>--</option><option>iPhone 11 Pro Max</option><option>iPhone 11</option><option disabled>--</option><option>iPhone XR</option><option disabled>--</option><option>iPhone 8 Plus</option><option>iPhone 8</option><option disabled>--</option><option>iPhone X</option><option disabled>--</option><option>iPhone 7 Plus</option><option>iPhone 7</option> "
var phoneCase = "images/phone_cases/iPhone_13_Pro_Max/empty.png";
var case_code = "";
var price = "";

$(document).ready(function() {
	// Identify country
	$.get("https://ipinfo.io", function(response) {
		clientCountry = response.country;
	}, 'jsonp');

	setTimeout(function() {
		if (clientCountry == "SE") {
			price = "0.0kr";
		} else {
			price = "0.0€";
		}

		$('#calculated-price').html(price);
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
				phoneCase = "../images/phone_cases/iPhone_13_Pro_Max/"+phoneMotive.replace(/ /g, '-')+".png";
			} else if (model == 'iPhone 13') {
				phoneCase = "../images/phone_cases/iPhone_13/"+phoneMotive.replace(/ /g, '-')+".png";
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
	let phoneMotive = document.querySelector('#phone-motive').value;





	if (phoneMotive !== "Own motive") {
		setTimeout(function() {
			if (phoneMotive !== "Select your motive") {
				if (clientCountry == "SE") {
					price = "99kr";
				} else {
					price = "9.9€";
				}
			} else {
				if (clientCountry == "SE") {
					price = "0.0kr";
				} else {
					price = "0.0€";
				}
			}

			$('#calculated-price').html(price);
		});
	} else {
		if (clientCountry == "SE") {
			price = "199kr";
		} else {
			price = "19.9€";
		}

		$('#calculated-price').html(price);
	}
}

function calculateDate(n) {
	var t = new Date();
	t.setDate(t.getDate() + n); 
	var month = "0"+(t.getMonth()+1);
	var date = "0"+t.getDate();
	month = month.slice(-2);
	date = date.slice(-2);
	var date = date +"/"+month +"/"+t.getFullYear();
	$('#calculated-date').html(date);
}

function buy_product() {
	let motive = document.querySelector('#phone-motive').value;
	if (motive.includes('Aramean')) {
		item = 7;
	} else if (motive.includes('Christian')) {
		item = 8;
	} else if (motive.includes('Assyrian')) {
		item = 9;
	} else if (motive.includes('Chaldean')) {
		item = 10;
	}
}
