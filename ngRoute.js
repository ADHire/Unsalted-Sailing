var app = angular.module('serviceModule', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/home',{
    // controller: '',
    templateUrl: "home.html"
  });

    $routeProvider.when('/userLogin',{
    // controller: '',
    templateUrl: "userLogin.html"
  });

  $routeProvider.when('/signUp',{
    // controller: '',
    templateUrl: "signUp.html"
  });

    $routeProvider.when('/refusePledge',{
    // controller: '',
    templateUrl: "refusePledge.html"
  });

  $routeProvider.when('/moodPage',{
    // controller: '',
    templateUrl: "moodPage.html"
  });

    $routeProvider.when('/topicPage',{
    // controller: '',
    templateUrl: "topicPage.html"
  });

  $routeProvider.when('/userInterface',{
  // controller: '',
  templateUrl: "userInterface.html"
});

$routeProvider.when('/createTopic',{
  // controller: '',
  templateUrl: "createTopic.html"
});

  $routeProvider.when('/topicConfirm',{
  // controller: '',
  templateUrl: "topicConfirm.html"
});

  $routeProvider.otherwise({
  templateUrl: '404error.html',
  controller: 'routeCtrl'
});

});

app.controller('routeCtrl', function(){

});
