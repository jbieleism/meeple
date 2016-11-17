(function(){

  angular.module('Meeple')
    .controller('LoginController', ['$location', '$scope', '$http', '$state', function($location, $scope, $http, $state) {



      $scope.loginUser = function(){

        $http.post('/api/public/login', $scope.login)
          .success(function(response){
            console.log("successful login")
            $location.path('/home')
          })
          .error(function(error){
            console.log("Login Error: ", error)
          })
      }

    }])

}());