'use strict';

/**
 * @ngdoc function
 * @name bestbooksApp.controller:FictionCtrl
 * @description
 * # FictionCtrl
 * Controller of the bestbooksApp
 */
angular.module('bestbooksApp')
  .controller('FictionCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('resources/nytimeBestsellerfiction20150706.json').success(function(data) {
      $scope.booklist2 = data;
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
