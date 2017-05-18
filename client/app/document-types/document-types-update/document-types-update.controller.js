(function() {
  'use strict';

  class DocumentTypesUpdateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('documentTypesUpdate', {
      templateUrl: "app/document-types/document-types-update/document-types-update.html",
      controller: DocumentTypesUpdateComponent,
      controllerAs: 'vm'
    })

})();
