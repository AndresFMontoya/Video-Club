'use strict';

describe('Component: PasswordRecoverComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var PasswordRecoverComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PasswordRecoverComponent = $componentController('password-recover', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
