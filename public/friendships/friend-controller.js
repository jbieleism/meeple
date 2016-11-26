 angular.module('Meeple')
  .controller('FriendController', ['$scope', '$http', function($scope, $http ){



    var user = localStorage['User-Info'].username;
    $scope.users = []

    $http.get('/api/friends/get')
      .success(function(response){
        console.log(response);
        $scope.users = response
      })
      .error(function(error){
        console.log("There has been a grave error: ", error)
      })


    $scope.makeFriendship = function(){

      var user = localStorage['User-Info'];

      var friendRequest = {
        username: user,

      }
      var newFriend = user
      console.log(newFriend)
      // $http.post('/api/friends/makeFriendship',)
      //   .success(function(response){
      //     console.log("Successful response: ", response)
      //   })
      //   .error(function(error){
      //     console.log("There has bee a grave error: ", error)
      // })

    }

  }]);