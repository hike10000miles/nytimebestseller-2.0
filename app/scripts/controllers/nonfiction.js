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
    $scope.wantbooks = ['Book Title'];
    $scope.addBook = function () {
      $scope.wantbooks.push($scope.toread);
      $scope.toread = '';
    };
    $scope.removeWantbook = function (index) {
      $scope.wantbooks.splice(index, 1);
    };
    
}]);
