angular.module('Meeple')

  .controller('HomeController', ['$location', '$scope', '$http', '$state', function($location, $scope, $http, $state){



    var socket = io.connect();

    $scope.sendMessage = function(){

      var message = $scope.msg;
      socket.emit('message', message);
      console.log('message submitted');
      $scope.msg = "";

    }


    $scope.logout = function(){
      localStorage.clear();
      $location.path('/login')
    }





  }]);
