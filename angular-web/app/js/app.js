'use strict';


// Declare app level module which depends on filters, and services
var visualMgmt =  angular.module('visualMgmt', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'visualMgmt.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/boardview', {templateUrl: 'partials/board.html', controller: 'BoardController'});
  $routeProvider.otherwise({redirectTo: '/boardview'});

}]);




