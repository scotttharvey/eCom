angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider

 .state('products', {
    url: '/products',
    templateUrl: 'views/homeTmpl.html',
    controller: 'mainCtrl'
  })
  .state('admin', {
    url: '/admin',
    templateUrl: 'views/adminTmpl.html',
    controller: 'mainCtrl'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'views/homeTmpl.html',
    controller: 'mainCtrl'
  });

})
