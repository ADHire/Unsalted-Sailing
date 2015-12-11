app.controller('myController', function ($scope){
	$scope.companies = [
	{ name: 'Grand Circus',
	linked: '#'}
	];

	$scope.addCompany = function() {
		$scope.companies.push(
			{name: $scope.newCompany,
			linked: $scope.newLinked});
	};
});

app.directive('coke', function () {
    return {
        restrict:'E',
        transclude:true,
        scope: true,
        template:'<div class="coke">' +
            '<h3>{{company.company || "company name"}}</h3>' +
            '<h3>{{company.linked || "company name"}}</h3>' +
            '<div class="coke-content" ng-transclude></div>' +
            '</div>',
        replace:true
    };
});