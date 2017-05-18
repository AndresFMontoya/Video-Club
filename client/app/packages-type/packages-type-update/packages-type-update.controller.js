(function() {
  'use strict';

  class PackagesTypeUpdateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('packagesTypeUpdate', {
      templateUrl: "app/document-type/document-type-update/document-type-update.html",
      controller: PackagesTypeUpdateComponent,
      controllerAs: 'vm'
    })

})();
