'use strict';

describe('Controller: NonfictionCtrl', function () {

  // load the controller's module
  beforeEach(module('bestbooksApp'));

  var NonfictionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NonfictionCtrl = $controller('NonfictionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NonfictionCtrl.awesomeThings.length).toBe(3);
  });
});
