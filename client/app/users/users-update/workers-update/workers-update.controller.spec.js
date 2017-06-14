'use strict';

describe('Component: WorkersUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var WorkersUpdateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    WorkersUpdateComponent = $componentController('workers-update', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
