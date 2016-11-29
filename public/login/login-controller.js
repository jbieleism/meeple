(function(){

  angular.module('Meeple')
    .controller('LoginController', ['$location', '$scope', '$http', '$state', function($location, $scope, $http, $state) {

      $scope.loggedIn = false;

      if (localStorage['User-Info']){
        $scope.loggedIn = true;
      }
      else{
        $scope.loggedIn = false;
      }

      $scope.loginUser = function(){
        $http.post('/api/public/login', $scope.login)
          .success(function(response){
            //saves user info to local storage upon successful login

            var friendArray = [];
            response.friends.forEach(function(friend){
              friendArray.push(friend.friendName)
            });

            localStorage.setItem('User-Info', response.username);
            localStorage.setItem('User-Id', response._id);
            localStorage.setItem('User-Friends', friendArray);

            $location.path('/home');

          })
          .error(function(error){
            console.log("Login Error: ", error)
          })
      }



    }])

}());