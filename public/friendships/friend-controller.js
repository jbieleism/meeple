 angular.module('Meeple')
  .controller('FriendController', ['$scope', '$http', function($scope, $http ){

    $http.get('/api/friends/get').then(function(response){
      setTimeout(function(response){
        console.log('poop')
      }, 100)
    })

  }]);