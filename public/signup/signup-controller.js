(function(){

  angular.module('Meeple')
    .controller('SignUpController', ['$scope', '$state', '$http', function($scope, $state, $http){

      $scope.createUser = function(){
        console.log("You clicked the create user button")
        console.log($scope.newUser)
      }

    }])

}())