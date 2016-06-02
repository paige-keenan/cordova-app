  // create the module and name it myApp
  var myApp = angular.module('myApp', ['ionic', 'ngCordova', 'ui.router'])

  myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home/home.html',
            controller: 'itemsController'
        })


        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'pages/table-data.html',
            controller: 'aboutController'

        });

    });

    myApp.controller('aboutController', function($scope) {
      $scope.imageTextModulesAbout = [
        {
          img: '../../img/home-hero.png',
          imgAlt: 'Lorem Ipsum',
          headline: 'Paige',
          body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
          buttonUrl: '#',
          buttonText: 'Learn More'
        },
        {
          img: '../../img/selfie-sundae-hero.png',
          imgAlt: 'Lorem Ipsum',
          headline: 'Selfie Sundaes',
          body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
          buttonUrl: '#',
          buttonText: 'Learn More'
        },
        {
          img: '../../img/home-hero.png',
          imgAlt: 'Lorem Ipsum',
          headline: 'Iam & absurdum',
          body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
          buttonUrl: '#',
          buttonText: 'Learn More'
        }
      ];
    });

    myApp.controller('itemsController', function($scope) {
      $scope.imageTextModulesHome = [
        {
          img: '../../img/home-hero.png',
          imgAlt: 'Lorem Ipsum',
          headline: 'New Flavor',
          body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
          buttonUrl: '#',
          buttonText: 'Learn More'
        },
        {
          img: '../../img/selfie-sundae-hero.png',
          imgAlt: 'Lorem Ipsum',
          headline: 'Selfie Sundaes',
          body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
          buttonUrl: '#',
          buttonText: 'Learn More'
        },
        {
          img: '../../img/summer-flavors-hero.png',
          imgAlt: 'Lorem Ipsum',
          headline: 'Try Our Summer Flavors',
          body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
          buttonUrl: '#',
          buttonText: 'Learn More'
        }
      ];
    });

    myApp.controller('navControl', function($scope) {
      $scope.isActive = false;
      $scope.toggleNav = function(scope) {
          $scope.isActive = !$scope.isActive;
      };
    });


