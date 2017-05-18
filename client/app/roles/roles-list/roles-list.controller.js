(function() {
  'use strict';

  class RolesListComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('rolesList', {
      templateUrl: "app/roles/roles-list/roles-list.html",
      controller: RolesListComponent,
      controllerAs: 'vm'
    })

})();
