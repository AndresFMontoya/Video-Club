(function() {
  'use strict';

  angular.module('startUpApp')
    .factory('citiesService', citiesService);
  citiesService.inject = ["$resource", "API"];

  function citiesService($resource, API) {
    return $resource(API + "/api/cities/:id", {
      id: '@id'
    })
  }
})();
// el inject me sirve para injectar una libreria de angular y las incluye por medio de cadenas de texto en la cual las va a comprimir.
