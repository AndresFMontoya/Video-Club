(function() {
  'use strict';

  angular.module('startUpApp')
    .factory('specializationService', specializationService);
  specializationService.inject = ["$resource", "API"];

  function specializationService($resource, API) {
    return $resource(API + "/api/specialization/:id", {
      id: '@id'
    })
  }
})();
// el inject me sirve para injectar una libreria de angular y las incluye por medio de cadenas de texto en la cual las va a comprimir.
