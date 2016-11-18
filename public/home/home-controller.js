(function(){

  angular.module('Meeple')
    .controller('HomeController', ['$location', '$scope', '$http', '$state', function($location, $scope, $http, $state){



      $scope.sendMessage = function(){

      }


      $scope.logout = function(){
        localStorage.clear();
        $location.path('/login')
      }

    }])

}())