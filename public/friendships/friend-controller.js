 angular.module('Meeple')
  .controller('FriendController', ['$scope', '$http', function($scope, $http){

    $scope.user = localStorage['User-Info'];
    $scope.userId = localStorage['User-Id'];
    $scope.friendsList = [];


    var userFriends = localStorage['User-Friends'].split(',');
    userFriends.forEach(function(friend){
      $scope.friendsList.push(friend)
    })

    $scope.users = []

    // friend tabs
    $scope.allFriends = true;
    $scope.friendList = false;

    $scope.allFriendTab = function(){
      $scope.allFriends = true;
      $scope.friendList = false;
    }
    $scope.friendListTab = function(){
      $scope.allFriends = false;
      $scope.friendList = true;
    }

    $http.get('/api/friends/get')
      .success(function(response){
        $scope.users = response;
      })
      .error(function(error){
        console.log("There has been a grave error: ", error)
    })

    $scope.makeFriendship = function(userRequested){

      var friendRequest = {
        friendRequested: userRequested.username,
        friendRequestedId: userRequested._id,
        requestedBy: $scope.user,
        requesterId: $scope.userId
      }

      $http.post('/api/friends/makeFriendship', friendRequest)
        .success(function(response){
          console.log("Successful response: ", response);
        })
        .error(function(error){
          console.log("There has bee a grave error: ", error)
      })

    }













  }]);