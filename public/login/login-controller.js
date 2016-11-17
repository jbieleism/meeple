(function(){

  angular.module('Meeple')
    .controller('LoginController', ['$scope', '$http', '$state', function($scope, $http, $state) {

      $scope.loginUser = function(){

        $http.post('/api/public/login', $scope.login)
          .success(function(response){
            console.log("successful login")
          })
          .error(function(error){
            console.log("Login Error: ", error)
          })
      }

    }])

}());