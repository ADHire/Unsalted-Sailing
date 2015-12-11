var app = angular.module("prepModule", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

app.controller('Ctrl', function($scope) {
  $scope.user = {
    name: 'awesome user'
  };
});
