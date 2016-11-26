 angular.module('Meeple')
  .controller('FriendController', ['$scope', '$http', function($scope, $http ){

    $http.get('/api/friends/get')
      .success(function(response){
        console.log(response)
      })

  }]);