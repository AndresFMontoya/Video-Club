(function() {
  'use strict';

  angular.module('startUpApp')
    .factory('offerService', offerService);
  offerService.inject = ["$resource", "API"];

  function offerService($resource, API) {
    return $resource(API + "/api/offer/:id", {
      id: '@id'
    })
  }
})();
// el inject me sirve para injectar una libreria de angular y las incluye por medio de cadenas de texto en la cual las va a comprimir.
