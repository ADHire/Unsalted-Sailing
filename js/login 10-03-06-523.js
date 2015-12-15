var app = angular.module('prepModule');
app.factory('customerLogin', function() {
function customerLogin() {
	var tSwift = {
	'firstName': 'Taylor',
	'lastName': 'Swift',
	'email': 'taylorswift@gmail.com',
	'education': 'Grand Circus, Detroit',
	'jobTitle': 'Greatest female ever',
	'skills': 'Everything'
	};
	console.log("hi");
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	if (username.value === "taylorswift" && password.value === "taylorswift") {
		console.log(tSwift);
	}
	else {
		console.log("Nice try");
	}
};

});
