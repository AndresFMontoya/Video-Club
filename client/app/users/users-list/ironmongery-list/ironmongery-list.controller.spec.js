'use strict';

describe('Component: IronmongeryListComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var IronmongeryListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    IronmongeryListComponent = $componentController('ironmongery-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
