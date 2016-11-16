(function(){

  angular.module('Meeple')
    .controller('LoginController', ['$scope', '$http', '$state', function($scope, $http, $state) {

      $scope.loginUser = function(){
        var user = $scope.login
        $http.post('/api/public/login', user)
          .success(function(){
            console.log("successful login")
          })
          .error(function(error){
            console.log("Login Error: ", error)
          })
      }

    }])

}());