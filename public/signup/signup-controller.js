(function(){
    angular.module('Meeple')
      .controller('SignupController', ['$scope', '$state', '$http', function($scope, $state, $http){

        $scope.createUser = function(){
          var user = $scope.newUser;
          $http.post('/api/public/signup', user)
            .success(function(){
              console.log("Successful signup")
            })
            .error(function(error){
              console.log('Error in the signup: ', error)
            })
        }

    }]);
}());