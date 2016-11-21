angular.module('Meeple')

  .controller('HomeController', ['$location', '$scope', '$http', '$state', function($location, $scope, $http, $state){



//////////////////////////////////////////

    // ensures user is logged in
    // before entering chatroom
    if(localStorage['length'] === 0){
      alert('Must log in');
      $location.path('/');
    };

    //removes quotes from username in localstorage
    var username = [];
    var rawUser = localStorage['User-Info']
                    .split('')
                    .forEach(function(index){
                      if (index !== '"'){
                        username.push(index)
                      }
                    });
    username = username.join('');


//////////////////////////////////////////

    var socket = io.connect('http://localhost:8000');

    $scope.messages = [];
    $scope.sendMessage = function(){

      var message = {
        username: username,
        message: $scope.msg
      };

      socket.emit('send message', message);
      console.log('message submitted: ', message);
      $scope.msg = "";

      socket.on('get message', function(data){
        $scope.messages.push(data);
        $scope.$digest()
      })

    }




    $scope.logout = function(){
      localStorage.clear();
      $location.path('/login')
    }

  }]);






































































































