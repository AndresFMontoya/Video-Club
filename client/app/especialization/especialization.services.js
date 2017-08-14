(function() {
  'use strict';

  angular.module('startUpApp')
    .factory('especializationService', especializationService);
  especializationService.inject = ["$resource", "API"];

  function especializationService($resource, API) {
    return $resource(API + "/api/especialization/:id", {
      id: '@id'
    })
  }
})();
// el inject me sirve para injectar una libreria de angular y las incluye por medio de cadenas de texto en la cual las va a comprimir.
