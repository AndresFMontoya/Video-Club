'use strict';

describe('Component: NotFoundComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var NotFoundComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    NotFoundComponent = $componentController('not-found', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
