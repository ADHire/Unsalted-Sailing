// Module created and named
var app = angular.module('prepModule', ['ngRoute']); 

// Routing and view switching
app.config(function($routeProvider){
   $routeProvider.when('/login',{
      templateUrl: "/views/login/login.html",
      controller: 'routeCtrl'
   });
   $routeProvider.when('/profile',{
      templateUrl: "/views/profile/profile.html",
      controller: 'routeCtrl'
   });
   $routeProvider.when('/menu',{
      templateUrl: "/views/menu/menu.html",
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

// Controller creation
app.controller('routeCtrl', function(){
});