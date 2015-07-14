'use strict';

/**
 * @ngdoc function
 * @name bestbooksApp.controller:ScienceCtrl
 * @description
 * # ScienceCtrl
 * Controller of the bestbooksApp
 */
angular.module('bestbooksApp')
  .controller('ScienceCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('resources/nytimeBestsellerScience20150706.json').success(function(data) {
      $scope.booklist4 = data;
    });
}]);