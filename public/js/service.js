angular.module("app").service("service", function("$http"){
  return {

    items: function(item){
      return $http({
    method: "GET",
    url: "/api/products",
    data: item
  })
},

}
})
