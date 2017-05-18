(function() {
  'use strict';

  class RolesUpdateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('rolesUpdate', {
      templateUrl: "app/roles/roles-update/roles-update.html",
      controller: RolesUpdateComponent,
      controllerAs: 'vm'
    })

})();
