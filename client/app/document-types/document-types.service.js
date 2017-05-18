(function() {
  'use strict';

  angular.module('startUpApp')
    .factory('documentTypesService', documentTypesService);
  documentTypesService.inject = ["$resource", "API"];

  function documentTypesService($resource, API) {
    return $resource(API + "/api/document_types/:id", {
      id: '@id'
    })
  }
})();
// el inject me sirve para injectar una libreria de angular y las incluye por medio de cadenas de texto en la cual las va a comprimir.
