
var app = angular.module('myModule', []);

app.controller('myController', function($scope) { 
  $scope.companies = [
  	{company: 'Grand Circus', linked : "#"}
  
	];

	$scope.AddCompanies = function() {
		$scope.companies.push(
			{company: $scope.NewCompany,
			linked: $scope.NewLinked}
			)
		
		$scope.NewCompany = " ";
		$scope.NewLinked = " ";
	};

	
}); 
