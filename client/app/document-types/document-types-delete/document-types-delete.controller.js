(function() {
  'use strict';

  class DocumentTypesDeleteComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('documentTypesDelete', {
      templateUrl: "app/document-types/document-types-delete/document-types-delete.html",
      controller: DocumentTypesDeleteComponent,
      controllerAs: 'vm'
    })

})();
