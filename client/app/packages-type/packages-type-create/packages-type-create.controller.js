(function() {
  'use strict';

  class PackagesTypeCreateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('packagesTypeCreate', {
      templateUrl: "app/document-type/document-type-create/document-type-create.html",
      controller: PackagesTypeCreateComponent,
      controllerAs: 'vm'
    })

})();
