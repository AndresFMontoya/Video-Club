'use strict';

describe('Component: WorksProfileComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var WorksProfileComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    WorksProfileComponent = $componentController('WorksProfileComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
