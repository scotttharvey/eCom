angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider

.state('home', {
  url: "/home",
  templateUrl: "/views/homeTmpl.html",
    controller: "homeCtrl"
})
.state('admin', {
  url: "/admin",
  templateUrl: "/views/admin.html",
    controller: "adminCtrl"
})
.state('checkout', {
  url: "/checkout",
  templateUrl: "/views/checkout.html",
    controller: "checkoutCtrl"
})
})
