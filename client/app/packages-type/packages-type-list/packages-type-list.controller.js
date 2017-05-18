(function() {
  'use strict';

  class PackagesTypeListComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('packagesListCreate', {
      templateUrl: "app/document-type/document-type-list/document-type-list.html",
      controller: PackagesTypeListComponent,
      controllerAs: 'vm'
    })

})();
