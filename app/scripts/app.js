'use strict';

/**
 * @ngdoc overview
 * @name bestbooksApp
 * @description
 * # bestbooksApp
 *
 * Main module of the application.
 */
angular
  .module('bestbooksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/fiction', {
        templateUrl: 'views/fiction.html',
        controller: 'FictionCtrl',
        controllerAs: 'fiction'
      })
      .when('/nonfiction', {
        templateUrl: 'views/nonfiction.html',
        controller: 'NonfictionCtrl',
        controllerAs: 'nonfiction'
      })
      .when('/culture', {
        templateUrl: 'views/culture.html',
        controller: 'CultureCtrl',
        controllerAs: 'culture'
      })
      .when('/science', {
        templateUrl: 'views/science.html',
        controller: 'ScienceCtrl',
        controllerAs: 'science'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
