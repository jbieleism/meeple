(function(){
    angular.module('Meeple')
      .controller('SignupController', ['$scope', '$state', '$http', function($scope, $state, $http){

        $scope.createUser = function(){
          var user = $scope.newUser;
          $http.post('/api/public/signup', user)
            .success(function(response){
              console.log("Successful signup", response)
            })
            .error(function(error){
              console.log('Error in the signup: ', error)
            })
        }

    }]);
}());