'use strict';

describe('Controller: CultureCtrl', function () {

  // load the controller's module
  beforeEach(module('bestbooksApp'));

  var CultureCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CultureCtrl = $controller('CultureCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CultureCtrl.awesomeThings.length).toBe(3);
  });
});
