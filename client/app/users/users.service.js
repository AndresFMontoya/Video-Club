(function() {
  'use strict';

  angular.module('startUpApp')
    .factory('usersService', usersService);
  usersService.inject = ["$resource", "API"];

  function usersService($resource, API) {
    return $resource(API + "/api/users/:id", {
      id: '@id'
    })
  }
})();
// el inject me sirve para injectar una libreria de angular y las incluye por medio de cadenas de texto en la cual las va a comprimir.
