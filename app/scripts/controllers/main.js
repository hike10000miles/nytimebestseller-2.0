'use strict';

/**
 * @ngdoc function
 * @name bestbooksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bestbooksApp
 */
angular.module('bestbooksApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
