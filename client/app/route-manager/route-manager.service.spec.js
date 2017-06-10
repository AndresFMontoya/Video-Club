'use strict';

describe('Service: routeManager', function () {

  // load the service's module
  beforeEach(module('startUpApp'));

  // instantiate service
  var routeManager;
  beforeEach(inject(function (_routeManager_) {
    routeManager = _routeManager_;
  }));

  it('should do something', function () {
    expect(!!routeManager).to.be.true;
  });

});
