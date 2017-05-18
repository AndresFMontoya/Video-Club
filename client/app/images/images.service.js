(function() {
  'use strict';

  angular.module('startUpApp')
    .factory('imagesService', imagesService);
  imagesService.inject = ["$resource", "API"];

  function imagesService($resource, API) {
    return $resource(API + "/api/images/:id", {
      id: '@id'
    })
  }
})();
