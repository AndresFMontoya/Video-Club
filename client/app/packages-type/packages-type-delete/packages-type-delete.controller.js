(function() {
  'use strict';

  class PackagesTypeDeleteComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('packagesTypeDelete', {
      templateUrl: "app/document-type/document-type-delete/document-type-delete.html",
      controller: PackagesTypeDeleteComponent,
      controllerAs: 'vm'
    })

})();
