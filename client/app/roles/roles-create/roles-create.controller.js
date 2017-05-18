(function() {
  'use strict';

  class RolesCreateComponent {
    constructor() {
      this.hola = "Hola ADSI";

    }
  }

  angular.module('startUpApp')
  .component('rolesCreate', {
    templateUrl: "app/roles/roles-create/roles-create.html",
    controller: RolesCreateComponent,
    controllerAs: 'vm'
  })

})();
