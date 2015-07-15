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
    $scope.wantbooks = ['Book Title'];
    $scope.addBook = function () {
      $scope.wantbooks.push($scope.toread);
      $scope.toread = '';
    };
    $scope.removeWantbook = function (index) {
      $scope.wantbooks.splice(index, 1);
    };    
}]);