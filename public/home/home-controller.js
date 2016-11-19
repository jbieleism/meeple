(function(){

  angular.module('Meeple')
    .controller('HomeController', ['$location', '$scope', '$http', '$state', function($location, $scope, $http, $state){



      $scope.sendMessage = function(){
        var msg = $scope.msg
        console.log(msg)
      }


      $scope.logout = function(){
        localStorage.clear();
        $location.path('/login')
      }

    }])
}())