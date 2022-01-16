var iphone_brands = "<option style='display: none;'>Select your phone model</option><option>iPhone 13 Pro Max</option><option>iPhone 13 Pro</option><option>iPhone 13</option><option>iPhone 13 mini</option> <option disabled>--</option><option>iPhone 12 Pro Max</option><option>iPhone 12 (Pro)</option><option>iPhone 12 mini</option><option disabled>--</option><option>iPhone 11 Pro Max</option><option>iPhone 11 Pro</option><option>iPhone 11</option><option>iPhone SE (second generation \"2020\")</option><option disabled>--</option><option>iPhone XR</option><option>iPhone XS Max</option><option>iPhone XS</option><option>iPhone X</option><option disabled>--</option><option>iPhone 8 Plus</option><option>iPhone 8</option><option disabled>--</option><option>iPhone 7 Plus</option><option>iPhone 7</option><option disabled>--</option><option>iPhone 6(s) Plus</option><option>iPhone 6(s)</option>";
var samsung_brands = "<option style='display: none;'>Select your phone model</option><option>Samsung Galaxy S9</option><option>Samsung Galaxy S9 Plus</option><option>Samsung Galaxy S10</option><option>Samsung Galaxy S10 Plus</option><option>Samsung Galaxy S20 S11E</option><option>Samsung Galaxy S20P S11</option><option>Samsung S20 Ultra S11P</option>";
var phoneCase = "images/phone_cases/iPhone_13_Pro_Max/empty.png";
var case_code = "";
var cal_price = "";

$(document).ready(function() {
	// Identify country
	$.get("https://ipinfo.io", function(response) {
		clientCountry = response.country;
	}, 'jsonp');

	setTimeout(function() {
		if (clientCountry == "SE") {
			cal_price = "0.0kr";
		} else {
			cal_price = "0.0€";
		}

		$('#calculated-price').html(cal_price);
	}, 1000);

	$('#phone-brand').on('change', function() {
		setTimeout(function() {
			$('#phone-model').removeAttr('disabled');
			$('#phone-model').css({
				'background': '#26f'
			});

			if (document.querySelector('#phone-brand').value == "Apple – iPhone") {
				$('#phone-model').html(iphone_brands);
			} else if (document.querySelector('#phone-brand').value == "Samsung") {
				$('#phone-model').html(samsung_brands);
			}
		});
	});

	$('#phone-model').change(function() {
		if (document.querySelector('#phone-brand').value) {
			$('.material').removeAttr('disabled');
			$('.for-material').css({
				'color': '#000',
				'border': '1px solid #000'
			});
		}
	});

	$('.material').click(function() {
		if ($('.material').is(':checked')) {
			$('#phone-motive').removeAttr('disabled');
			$('#phone-motive').css({
				'background': '#26f'
			});
		}
	});
});









// change picture of phone case to selected motive
function motive() {
	let model = document.querySelector('#phone-model').value;
	let phoneMotive = document.querySelector('#phone-motive').value;
	if (phoneMotive !== 'Select your motive') {
		if (phoneMotive !== 'Own motive') {
			// if (model == 'iPhone 13 Pro Max' || model == 'iPhone 13 Pro') {
			// 	phoneCase = "../images/phone_cases/iPhone_13_Pro_Max/"+phoneMotive.replace(/ /g, '-')+".png";
			// } else if (model == 'iPhone 13') {
			// 	phoneCase = "../images/phone_cases/iPhone_13/"+phoneMotive.replace(/ /g, '-')+".png";
			// }

			phoneCase = "../images/phone-cases/TPU/iPhone-13-Pro-Max/"+phoneMotive.replace(/ /g, '-')+".png";








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
					cal_price = price.case+"kr";
				} else {
					cal_price = price.case/10+"€";
				}
			} else {
				if (clientCountry == "SE") {
					cal_price = "0.0kr";
				} else {
					cal_price = "0.0€";
				}
			}

			$('#calculated-price').html(cal_price);
		});
	} else {
		if (clientCountry == "SE") {
			cal_price = "199kr";
		} else {
			cal_price = "19.9€";
		}

		$('#calculated-price').html(cal_price);
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
	$('#calculated-date').html('This product should arrive before '+date);
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
