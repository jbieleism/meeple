(function(){
  // This file will direct front end routes
  angular.module('Meeple', ['ui-router'])

    .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/')

      $stateProvider
        .state('signup', {
          url: '/signup',
          templateUrl: '/public/signup/signup.html',
          controller: 'SignUpController'
        })
        .state('login', {
          url: '/login',
          templateUrl: '/public/login/login.html',
          controller: 'LoginController'
        })



    })





}());