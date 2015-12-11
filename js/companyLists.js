app.controller('myController', function ($scope){
	$scope.companies = [
	{ name: 'Grand Circus',
	linked: '#'}
	];

	$scope.addCompany = function() {
		$scope.companies.push(
			{name: $scope.newCompany,
			linked: $scope.newLinked});
	}
});
