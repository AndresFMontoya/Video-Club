(function() {
  'use strict';

  angular.module('startUpApp')
    .factory('rolesService', rolesService);
  rolesService.inject = ["$resource", "API"];

  function rolesService($resource, API) {
    return $resource(API + "/api/roles/:id", {
      id: '@id'
    })
  }
})();
// el inject me sirve para injectar una libreria de angular y las incluye por medio de cadenas de texto en la cual las va a comprimir.
