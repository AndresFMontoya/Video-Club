'use strict';

describe('Component: IronmongeryUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var IronmongeryUpdateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    IronmongeryUpdateComponent = $componentController('ironmongery-update', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
