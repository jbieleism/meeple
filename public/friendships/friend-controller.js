 angular.module('Meeple')
  .controller('FriendController', ['$scope', '$http', function($scope, $http){

    $scope.user = localStorage['User-Info'];
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

      var friendRequest = {
        friendRequested: userRequested.username,
        requestedBy: $scope.user,
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