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
console.log("Crappppp");
app.directive('coke', function () {
  return {
      restrict:'AE',
      transclude:true,
      scope:  true,
      template:'<div class="newDiv">' +
          '<h3>{{company.company || "company name"}}</h3>' +
          '<h3>{{company.linked || "company name"}}</h3>' +
          '<div class="coke-content" ng-transclude></div>' +
          '</div>',
    replace:true,
    link: function (scope, el, attrs) {

           // initialize the css
           el.css({
               'background-color': 'blue'
           });

}
};
});
// <div class="row" class="col-xs-12">
// 	<div id="profileRow">
// 		<h4 class="profileHead col-xs-4" contenteditable="true">Bio</h4>
// 		<p class="profileText col-x-8" contenteditable="true">Grand Circus is passionate about training people for amazing careers in tech and helping local businesses grow by hiring local tech superstars. Our bootcamps serve both purposes: we give people critical skills for tech jobs while introducing them to businesses looking for talent.</p>
// 	</div>
// </div>
//
// angular
//   .module('myMod') //getter
//
//   .directive('postDir', function(){
//     return {
//       restrict: 'EA',
//       template: '<div class="redditPosts"> A post goes here </div>  <div class="redditPosts"> A post goes here </div>',
//
//       replace: false
//     };
//   });
