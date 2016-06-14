angular.module('app').controller('mainCtrl', function($scope, service) {

  $scope.items = function(){
    service.items(item).then(function(response){
      $scope.items = response.data;
      console.log(response.data);
    })
  }


})
