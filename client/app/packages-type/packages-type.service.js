(function() {
  'use strict';

  angular.module('startUpApp')
    .factory('packagesTypeService', packagesTypeService);
  packagesTypeService.inject = ["$resource", "API"];

  function packagesTypeService($resource, API) {
    return $resource(API + "/api/packages-type/:id", {
      id: '@id'
    })
  }
})();
