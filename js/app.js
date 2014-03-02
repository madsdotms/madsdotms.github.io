'use strict';







function onGoogleReady() {
  //alert('hej');
  //angular.bootstrap(document.getElementById("map"), ['myApp']);

  angular.element(document).ready(function() {
         
         // Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.router',
  'ui.map',
  'ui.utils',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  
  //$locationProvider.hashPrefix('!').html5Mode(true);
  $locationProvider.hashPrefix('!');

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/home.html"
    })
    .state('cv', {
      url: "/cv",
      templateUrl: "views/cv.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "views/about.html"
    })
    .state('work', {
      url: "/work",
      templateUrl: "views/work.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "views/contact.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    })
    .state('state2.list', {
      url: "/list",
        templateUrl: "partials/state2.list.html",
        controller: function($scope) {
          $scope.things = ["A", "Set", "Of", "Things"];
        }
      })
});
         


         var myAppModule = angular.module('app.ui-map', ['ui.map']);

         angular.bootstrap(document, ['myApp']);
  });

}






