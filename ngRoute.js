var app = angular.module('serviceModule', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/home',{
    // controller: '',
    templateUrl: "home.html"
  });


  $routeProvider.when('/pledge',{
  // controller: '',
  templateUrl: "pledge.html"
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

<<<<<<< HEAD
$routeProvider.when('/createTopic',{
=======
  $routeProvider.when('/createTopic',{
>>>>>>> ff1fa11095f0890a039f2d4e8321543bdc6f84ec
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
