// create the module and name it myApp
var myApp = angular.module('myApp', ['ionic', 'ngCordova', 'ui.router'])

myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
      url: '/home',
      templateUrl: 'pages/home/home.html',
      controller: 'homeController'
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
      url: '/about',
      templateUrl: 'pages/about/about.html',
      controller: 'aboutController'
    })

    // SELFIE SUNDAE PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('selfie-sundae', {
      url: '/selfie-sundae',
      templateUrl: 'pages/selfie-sundae/index.html',
      controller: 'aboutController'
    })

    // SHOP PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('shop', {
      url: '/shop',
      templateUrl: 'pages/selfie-sundae/index.html',
      controller: 'aboutController'
    });

});

// Home Page Data
myApp.controller('homeController', function($scope) {
  $scope.homeData = [
    {
      img: '../../img/home/home-hero.png',
      imgAlt: 'Lorem Ipsum',
      headline: 'New Flavor Alert',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
      buttonUrl: '#',
      buttonText: 'Learn More'
    },
    {
      img: '../../img/home/selfie-sundae-hero.png',
      imgAlt: 'Lorem Ipsum',
      headline: 'Selfie Sundaes',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
      buttonUrl: '#',
      buttonText: 'Learn More'
    },
    {
      img: '../../img/home/summer-flavors-hero.jpg',
      imgAlt: 'Lorem Ipsum',
      headline: 'Try Our Summer Flavors',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
      buttonUrl: '#',
      buttonText: 'Learn More'
    },
    {
      img: '../../img/home/swag-hero.jpg',
      imgAlt: 'Lorem Ipsum',
      headline: 'Swag Shop',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
      buttonUrl: '#',
      buttonText: 'Shop Now'
    }
  ];
});

// About Page Data
myApp.controller('aboutController', function($scope) {
  $scope.aboutData = [
    {
      img: '../../img/about/about-hero.jpg',
      imgAlt: 'Lorem Ipsum',
      headline: 'About',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.'
    },
    {
      img: '../../img/about/jeni-hero.jpg',
      imgAlt: 'Lorem Ipsum',
      headline: 'JENI BRITTON BAUER',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
      buttonUrl: '#',
      buttonText: 'Learn More'
    }
  ];
});

// Toggle Nav State
myApp.controller('navControl', function($scope) {
  $scope.isActive = false;
  $scope.toggleNav = function(scope) {
      $scope.isActive = !$scope.isActive;
  };
});


