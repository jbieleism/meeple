(function(){

  angular.module('Meeple')
    .controller('LoginController', ['$location', '$scope', '$http', '$state', function($location, $scope, $http, $state) {

      if (localStorage['User-Info']){
        $scope.loggedIn = true;

      }
      else{
        $scope.loggedIn = false;
      }


      $scope.loginUser = function(){

        $http.post('/api/public/login', $scope.login)
          .success(function(response){
            console.log("successful login");
            //saves user info to local storage upon successful login
            localStorage.setItem('User-Info', JSON.stringify(response));
            $location.path('/home');
          })
          .error(function(error){
            console.log("Login Error: ", error)
          })
      }




    }])

}());