'use strict';

/**
 * @ngdoc function
 * @name bestbooksApp.controller:NonfictionCtrl
 * @description
 * # NonfictionCtrl
 * Controller of the bestbooksApp
 */
angular.module('bestbooksApp')
  .controller('NonfictionCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('resources/nytimeBestsellerNonfiction20150706.json').success(function(data) {
      $scope.booklist1 = data;
    });
}]);
