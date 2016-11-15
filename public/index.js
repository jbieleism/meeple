(function(){
  // This file will serve as the apex for front end routes
  angular.module('Meeple', ['ui-router'])
    .config(function($stateProvider){
      $stateProvider
        .state('/signup', {
          url: '/signup',
          templateUrl: '/public/signup/signup.html',
          controller: 'SignUpController'
        })
    })





}());