angular.module('Meeple')

  .controller('HomeController', ['$location', '$scope', '$http', '$state', '$interval', function($location, $scope, $http, $state, $interval){

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

    var currentChannel = "Global Channel";
    var channels = [];

    $scope.sendMessage = function(){

      var date = new Date;
      date = date.toLocaleString();

      var requestChat = {
        author: username,
        message: $scope.msg,
        channel: $scope.channel,
        date: date,
        channel: currentChannel
      };

      console.log(requestChat)

      $http.post('/api/chat/post', requestChat)
        .success(function(response){
          //set time out will fix the async error
          //error: most recent messages won't display until a subsequent message was sent.
          setTimeout(function(response){
            console.log("This is the response from the chat post: ", response)
          }, 500)

        })
        .error(function(error){
          console.log("There was an error")
      });

      socket.emit('send message', requestChat);
      console.log('message submitted: ', requestChat);
      $scope.msg = "";

    };

    //on initial visit from user
    function getChat(initial){

      $http.get('/api/chat/get')
        .success(function(response){
          if (initial){
            $scope.chats = response;

            //get active chat channels
            $scope.chats.forEach(function(index){
              channels.push(index.channel)
            })
          }

        })
    };



    getChat(true);

    socket.on('get message', function(data){
      // data.date = new Date;
      // data.date = data.date.toLocaleString();
      // console.log("data date: ", data.date)
      $scope.chats.push(data);
      $scope.$digest()
    })



    $scope.createChatroom = function(){

      console.log(channels)
    }


    $scope.logout = function(){
      localStorage.clear();
      $location.path('/login')
    }

  }]);






































































































