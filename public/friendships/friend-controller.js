 angular.module('Meeple')
  .controller('FriendController', ['$scope', '$http', function($scope, $http ){

    $scope.users = []

    $http.get('/api/friends/get')
      .success(function(response){
        console.log(response);
        $scope.users = response
      })
      .error(function(error){
        console.log("There has been a grave error: ", error)
      })




  }]);