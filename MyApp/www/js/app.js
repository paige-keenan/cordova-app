
//setup angular
var app = angular.module('myApp', ['ionic']);

app.controller('main', function ($scope) {

  //initialize the tasks scope with empty array
  $scope.tasks = [];

  //initialize the task scope with empty object
  $scope.task = {};

  $scope.getTasks = function () {
    console.log('app loaded');
  }

});
