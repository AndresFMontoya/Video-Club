'use strict';

describe('Component: RestrictedComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var RestrictedComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    RestrictedComponent = $componentController('restricted', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
