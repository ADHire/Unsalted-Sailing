app.controller('myController', function($scope) { 
  $scope.companies = [
  	{company: 'Grand Circus', 
  	linked : "#"}
  
	];

	$scope.addCompany = function() {
		$scope.companies.push(
			{company: $scope.newCompany,
			linked: $scope.newLinked});
			
		
	
	}

	
}); 
