// create the module and name it myApp
var myApp = angular.module('myApp', ['ionic', 'ngCordova', 'ui.router'])

myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
      url: '/home',
      templateUrl: 'pages/home/index.html',
      controller: 'homeController'
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
      url: '/about',
      templateUrl: 'pages/about/index.html',
      controller: 'aboutController'
    })

    // SELFIE SUNDAE PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('selfie-sundae', {
      url: '/selfie-sundae',
      templateUrl: 'pages/selfie-sundae/index.html'
    })

    // STORE LOCATOR PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('store-locator', {
      url: '/store-locator',
      templateUrl: 'pages/store-locator/index.html'
    })

    // SHOP PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('shop', {
      url: '/shop',
      templateUrl: 'pages/shop/index.html',
      controller: 'shopController'
    })

    // HELP PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('help', {
      url: '/help',
      templateUrl: 'pages/help/index.html',
      controller: 'helpController'
    });

});

// Home Page Data
myApp.controller('homeController', function($scope) {
  $scope.homeData = [
    {
      img: './img/home/home-hero.png',
      imgAlt: 'Lorem Ipsum',
      headline: 'New Flavor Alert',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
      buttonUrl: '#',
      buttonText: 'Learn More'
    },
    {
      img: './img/home/selfie-sundae-hero.png',
      imgAlt: 'Lorem Ipsum',
      headline: 'Selfie Sundaes',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
      buttonUrl: '#',
      buttonText: 'Try it Now'
    },
    {
      img: './img/home/summer-flavors-hero.jpg',
      imgAlt: 'Lorem Ipsum',
      headline: 'Try Our Summer Flavors',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
      buttonUrl: '#',
      buttonText: 'Learn More'
    },
    {
      img: './img/home/swag-hero.jpg',
      imgAlt: 'Lorem Ipsum',
      headline: 'Swag Shop',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
      buttonUrl: '/shop',
      buttonText: 'Shop Now'
    }
  ];
});

// About Page Data
myApp.controller('aboutController', function($scope) {
  $scope.aboutData = [
    {
      img: './img/about/about-hero.jpg',
      imgAlt: 'Lorem Ipsum',
      headline: 'About',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.'
    },
    {
      img: './img/about/jeni-hero.jpg',
      imgAlt: 'Lorem Ipsum',
      headline: 'JENI BRITTON BAUER',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
      buttonUrl: '#',
      buttonText: 'Learn More'
    }
  ];
});

// Shop Page Data
myApp.controller('shopController', function($scope) {
  $scope.shopData = [
    {
      img: './img/shop/ice-cream-spoon.png',
      imgAlt: 'Lorem Ipsum',
      headline: 'Salty Caramel',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      price: '4.50'
    },
    {
      img: './img/shop/ice-cream-spoon-2.png',
      imgAlt: 'Lorem Ipsum',
      headline: 'Pralines & Cream',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      price: '6.50'
    },
    {
      img: './img/shop/ice-cream-spoon-3.png',
      imgAlt: 'Lorem Ipsum',
      headline: 'Brambleberry Crisp',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      price: '5.50'
    },
    {
      img: './img/shop/ice-cream-spoon.png',
      imgAlt: 'Lorem Ipsum',
      headline: 'Roasted Strawberry Buttermilk',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      price: '5.50'
    },
    {
      img: './img/shop/ice-cream-spoon-2.png',
      imgAlt: 'Lorem Ipsum',
      headline: 'Pistachio & Honey',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      price: '6.00'
    },
    {
      img: './img/shop/ice-cream-spoon-3.png',
      imgAlt: 'Lorem Ipsum',
      headline: 'Wildberry Lavender',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      price: '4.50'
    }
  ];
});

// Help Page Data
myApp.controller('helpController', function($scope) {
  $scope.helpData = [
    {
      question: 'What is a frozen custard',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.'
    },
    {
      question: 'What\'s a Brambleberry',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.'
    },
    {
      question: 'Do you make your ice creams in the scoop shops',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.'
    },
    {
      question: 'What\'s the difference between ice cream, frozen custard, and sorbet',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.'
    },
    {
      question: 'Who\'s Jeni Britton Bauer',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.'
    },
    {
      question: 'Where can I find your ice cream near me',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.'
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

// Toggle FAQ State
myApp.controller('faqControl', function($scope) {
  $scope.isActive = false;
  $scope.toggleFaq = function(scope) {
      $scope.isActive = !$scope.isActive;
  };
});

// Map Control
myApp.controller('mapControl', function($scope) {
  initMap();
});
