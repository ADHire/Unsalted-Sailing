// Module created and named
var app = angular.module('prepModule', ['ngRoute', 'ngStorage']);
// Routing and view switching
app.config(function($routeProvider){
   $routeProvider.when('/', {
     template: "<h1>blah</h1>",
     controller: 'routeCtrl'
   });

   $routeProvider.when('/login',{
      templateUrl: "/views/login/login.html",
      controller: 'routeCtrl'
   });
   $routeProvider.when('/profile',{
      templateUrl: "/views/profile/profile.html",
      controller: 'routeCtrl'
   });
   $routeProvider.when('/myPrep',{
      templateUrl: "/views/myPrep/myPrep.html",
      controller: 'routeCtrl'
   });
   $routeProvider.when('/companyInfo',{
      templateUrl: "/views/companyInfo/companyInfo.html",
      controller: 'routeCtrl'
   });
   $routeProvider.when('/companyLists',{
      templateUrl: "/views/companyLists/companyLists.html",
      controller: 'routeCtrl'
   });
});
app.controller("routeCtrl", function($scope, $localStorage) {
    console.log('anything');
    $scope.saveData = function() {
        $localStorage.message = "Hello World";
        console.log('hello');
    };

    $scope.loadData = function() {
        $scope.message = $localStorage.message;
    };
});
