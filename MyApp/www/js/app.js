  // create the module and name it myApp
  var myApp = angular.module('myApp', ['ionic', 'ngCordova', 'ui.router'])

  myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home/home.html'
        })


        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'pages/about/about.html' },

                // the child views will be defined here (absolutely named)
                'columnOne@about': { template: 'Look I am a column!' },

                // for column two, we'll define a separate controller
                'columnTwo@about': {
                    templateUrl: 'pages/table-data.html',
                    controller: 'itemsController'
                }
            }

        });

    });

    myApp.controller('itemsController', function($scope) {

        $scope.message = 'test';

        $scope.scotches = [
            {
                name: 'Macallan 12',
                price: 50
            },
            {
                name: 'Chivas Regal Royal Salute',
                price: 10000
            },
            {
                name: 'Glenfiddich 1937',
                price: 20000
            }
        ];

    });

    myApp.controller('navControl', function($scope) {
      $scope.isActive = false
      $scope.toggleNav = function() {
          $scope.isActive = !$scope.isActive
      };
    });


