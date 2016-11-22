angular.module('Meeple')

  .controller('HomeController', ['$location', '$scope', '$http', '$state', function($location, $scope, $http, $state){



//////////////////////////////////////////

    // ensures user is logged in
    // before entering chatroom
    if(localStorage['User-Info'] === undefined){
      alert('Must log in');
      $location.path('/');
    }

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




    $scope.sendMessage = function(e){

      var requestMessage = {
        username: username,
        message: $scope.msg
      };

      // $http.post('/api/public/messages', requestMessage)
      //   .success(function(response){
      //   })
      //   .error(function(error){
      //     console.log("There was an error")
      //   })

      socket.emit('send message', requestMessage);
      console.log('message submitted: ', requestMessage);
      $scope.msg = "";

    }
    $scope.messages = [];

    socket.on('get message', function(data){
      $scope.messages.push(data);
      $scope.$digest()
    })



    $scope.createChatroom = function(){
      console.log("This will create a chatroom")
    }


















    $scope.logout = function(){
      localStorage.clear();
      $location.path('/login')
    }

  }]);






































































































