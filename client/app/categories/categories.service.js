(function() {
  'use strict';

  angular.module('startUpApp')
    .factory('categoriesService', categoriesService);
  categoriesService.inject = ["$resource", "API"];

  function categoriesService($resource, API) {
    return $resource(API + "/api/categories/:id", {
      id: '@id'
    })
  }
})();
// el inject me sirve para injectar una libreria de angular y las incluye por medio de cadenas de texto en la cual las va a comprimir.
