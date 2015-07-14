'use strict';

describe('Controller: FictionCtrl', function () {

  // load the controller's module
  beforeEach(module('bestbooksApp'));

  var FictionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FictionCtrl = $controller('FictionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FictionCtrl.awesomeThings.length).toBe(3);
  });
});
