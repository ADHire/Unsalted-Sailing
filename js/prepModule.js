// Module created and named
var app = angular.module('prepModule', ['ngRoute', 'ngStorage']);
var loggedIn=false;
// Routing and view switching
app.config(function($routeProvider){
  $routeProvider.when('/landing',{
     templateUrl: "/views/landing/landing.html",
     controller: 'showImages'
  });
  $routeProvider.when('/login', {
    templateUrl: "/views/login/login.html",
    controller: 'loginController'
  });

  $routeProvider.when('/profile', {
    templateUrl: "/views/profile/profile.html",
    controller: 'loginController'
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
      controller: 'myController'
   });
});
// Factory for login
app.factory('loginServ', function() {
  var tSwift = {
    firstName: 'Taylor',
    lastName: 'Swift',
    email: 'taylorswift@gmail.com',
    education: 'Grand Circus, Detroit',
    jobTitle: 'Greatest female ever',
    skills: 'Everything'
  };
  return {
   tSwift
    }

});

// Controller for login
app.controller("loginController", function ($scope, loginServ) {
  if(loggedIn){
    $scope.taylorFirstName = loginServ.tSwift.firstName;
    $scope.taylorLastName = loginServ.tSwift.lastName;
    $scope.taylorEmail = loginServ.tSwift.email;
    $scope.taylorEducation = loginServ.tSwift.education;
    $scope.taylorJobTitle = loginServ.tSwift.jobTitle;
    $scope.taylorSkills = loginServ.tSwift.skills;
  } else{
    $scope.taylorFirstName = "Please Log In";
  }
  $scope.ballinLogIn=function(){
    console.log("swift");
    loggedIn=true;
   $scope.taylorFirstName = loginServ.tSwift.firstName;
  }

    //  Did Tupac really die?
    // $scope.taylorFirstName = tSwift.firstName;
    // $scope.taylorLastName = tSwift.lastName;
    // $scope.taylorEmail = tSwift.email;
    // $scope.taylorEducation = tSwift.education;
    // $scope.taylorJobTitle = tSwift.jobTitle;
    // $scope.taylorSkills = tSwift.skills;
});

// Controller for adding companies
app.controller('myController', function ($scope){
  $scope.companies = [
    { name: 'Grand Circus',
    linked: '#'}
  ];
  $scope.addCompany = function() {
    $scope.companies.push({
      name: $scope.newCompany,
      linked: $scope.newLinked
    });
  }
});

// Directives being added
app.directive('coke', function () {
  return {
    restrict:'AE',
    transclude:true,
    scope:  true,
    templateUrl: 'views/companyLists/newCompanyListTemplate.html',
    replace:true,
    link: function (scope, el, attrs) {
      // initialize the css
      // el.css({
      // 'background-color': 'blue'
      // });
    }
  };
});

// Storage stuffs
// app.controller("routeCtrl", function($scope, $localStorage) {
//   console.log('anything');
//   $scope.saveData = function() {
//     $localStorage.message = "Hello World";
//     console.log('hello');
//   };
//   $scope.loadData = function() {
//     $scope.message = $localStorage.message;
//   };
// });
