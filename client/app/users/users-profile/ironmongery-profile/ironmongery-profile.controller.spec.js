'use strict';

describe('Component: IronmongeryProfileComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var IronmongeryProfileComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    IronmongeryProfileComponent = $componentController('IronmongeryProfileComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
