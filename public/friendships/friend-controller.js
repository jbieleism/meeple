 angular.module('Meeple')
  .controller('FriendController', ['$scope', '$http', function($scope, $http){



    var user = localStorage['User-Info'];
    $scope.users = []

    $http.get('/api/friends/get')
      .success(function(response){
        console.log(response);
        $scope.users = response
      })
      .error(function(error){
        console.log("There has been a grave error: ", error)
      })


    $scope.makeFriendship = function(userRequested){

      var user = localStorage['User-Info'];

      console.log("User requesting: ", user);
      console.log("User requested: ", userRequested)
      console.log("This is the requesters id: ", userRequested._id)

      var friendRequest = {
        friendRequested: userRequested.username,
        requestedBy: user,
        requesterId: userRequested._id

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