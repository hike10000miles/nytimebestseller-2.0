'use strict';

/**
 * @ngdoc function
 * @name bestbooksApp.controller:CultureCtrl
 * @description
 * # CultureCtrl
 * Controller of the bestbooksApp
 */
angular.module('bestbooksApp')
  .controller('CultureCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('resources/nytimeBestsellerCulture20150706.json').success(function(data) {
      $scope.booklist3 = data;
    });
}]);