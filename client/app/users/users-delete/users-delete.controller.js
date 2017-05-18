(function() {
  'use strict';

  class UsersDeleteComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('usersDelete', {
      templateUrl: "app/users/users-delete/usesr-delete.html",
      controller: UsersDeleteComponent,
      controllerAs: 'vm'
    })

})();
