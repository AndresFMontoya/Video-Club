(function() {
  'use strict';

  class DocumentTypesListComponent {
    constructor(documentTypesServices) {
            this.documentTypesServices = documentTypesServices;
        }
        $onInit() {

            this.documentTypesServices.query().$promise
						.then(response=>{
							console.log("TIPOS DOCUMENTOS",response)
              this.documentTypes=response;
						});

        }
  }

  angular.module('startUpApp')
    .component('documentTypesList', {
      templateUrl: "app/document-types/document-types-list/document-types-list.html",
      controller: DocumentTypesListComponent,
      controllerAs: 'vm'
    })

})();
