 angular.module('Meeple')
  .controller('FriendController', ['$scope', '$http', function($scope, $http){

    $scope.user = localStorage['User-Info'];
    $scope.userId = localStorage['User-Id'];
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
      // console.log("user id: ", $scope.userId)
      var friendRequest = {
        friendRequested: userRequested.username,
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