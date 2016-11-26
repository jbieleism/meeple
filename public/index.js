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
        .state('home', {
          url: '/home',
          templateUrl: 'public/home/home.html',
          controller: 'HomeController'
        })
        .state('friend', {
          url: '/home/friends',
          templateUrl: 'public/friendships/friend.html',
          controller: 'FriendController'
        })



    })

}());