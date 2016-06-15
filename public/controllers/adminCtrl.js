angular.module('app').controller('adminCtrl', function($scope, service) {
  $scope.getProducts = function(){
    service.getProducts().then(function(res){
      $scope.products = res.data;
      console.log(res.data);
    })
  }

    $scope.addProduct = function(newProduct) {
        service.postProduct(newProduct).then(function(ans){
          $scope.products = ans.data;
        });
    }

    $scope.changeProduct = function(product) {
      service.putProduct(product);
    }

    $scope.removeProduct = function(product) {
      service.deleteProduct(product);
    }

})
