angular.module('Meeple')

  .controller('HomeController', ['$location', '$scope', '$http', '$state', function($location, $scope, $http, $state){

//////////////////////////////////////////

    // ensures user is logged in
    // before entering chatroom
    if(!localStorage['User-Info']){
      alert('Must log in');
      $location.path('/');
    }

    // removes quotes from username in localstorage
    // username used for message author
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




    $scope.sendMessage = function(){

      var requestChat = {
        author: username,
        message: $scope.msg,

      };

      $http.post('/api/chat/post', requestChat)
        .success(function(response){
          console.log("This is the response from the chat post: ", response)
        })
        .error(function(error){
          console.log("There was an error")
        })

      socket.emit('send message', requestChat);
      console.log('message submitted: ', requestChat);
      $scope.msg = "";

    }
    $scope.messages = [];

    socket.on('get message', function(data){
      $scope.messages.push(data);
      $scope.$digest()
    })


    $scope.createChatroom = function(){
      console.log("poop")
    }









    $scope.logout = function(){
      localStorage.clear();
      $location.path('/login')
    }

  }]);






































































































