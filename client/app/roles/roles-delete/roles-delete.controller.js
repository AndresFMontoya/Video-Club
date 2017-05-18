(function() {
  'use strict';

  class RolesDeleteComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('rolesDelete', {
      templateUrl: "app/roles/roles-delete/roles-delete.html",
      controller: RolesDeleteComponent,
      controllerAs: 'vm'
    })

})();
