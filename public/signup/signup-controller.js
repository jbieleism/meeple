(function(){
    angular.module('Meeple')
      .controller('SignupController', ['$location', '$scope', '$state', '$http', function($location, $scope, $state, $http){

        $scope.createUser = function(){
          var user = $scope.newUser;
          $http.post('/api/public/signup', user)
            .success(function(response){
              console.log("Successful signup", response);
              alert('Signup successful. Now log in...')
              $location.path('/')
            })
            .error(function(error){
              console.log('Error in the signup: ', error)
            })
        }

    }]);
}());