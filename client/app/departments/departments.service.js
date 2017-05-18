(function() {
  'use strict';

  angular.module('startUpApp')
    .factory('departmentsService', departmentsService);
  departmentsService.inject = ["$resource", "API"];

  function departmentsService($resource, API) {
    return $resource(API + "/api/departments/:id", {
      id: '@id'
    })
  }
})();
// el inject me sirve para injectar una libreria de angular y las incluye por medio de cadenas de texto en la cual las va a comprimir.
