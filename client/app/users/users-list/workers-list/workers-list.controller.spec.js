'use strict';

describe('Component: WorkersListComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var WorkersListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    WorkersListComponent = $componentController('workers-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
