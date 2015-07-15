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
    $scope.wantbooks = ['Book Title'];
    $scope.addBook = function () {
      $scope.wantbooks.push($scope.toread);
      $scope.toread = '';
    };
    $scope.removeWantbook = function (index) {
      $scope.wantbooks.splice(index, 1);
    };

}]);