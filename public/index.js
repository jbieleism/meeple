(function(){


  angular.module('Meeple', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/login')

      $stateProvider
        .state('signup', {
          url: '/signup',
          templateUrl: 'public/signup/signup.html',
          controller: 'SignupController'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'public/login/login.html',
          controller: 'LoginController'
        })



    })

}());