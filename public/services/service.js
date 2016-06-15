angular.module("app").service("service", function($http, $q){

  this.getProducts = function() {
    return $http({
      method: 'GET',
      url: '/api/products'
    })
  }

  this.postProduct = function(newProduct) {
    return $http({
      method: 'POST',
      url: '/api/products',
      data: newProduct
    })
  }

  this.putProduct = function(product) {
    $http({
      method: 'PUT',
      url: '/api/products/' + product.id,
      data: product
    })
  }

  this.deleteProduct = function(product) {
    $http({
      method: 'DELETE',
      url: '/api/products/' + product.id
    })
  }
})
