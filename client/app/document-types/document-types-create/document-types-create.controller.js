(function() {
  'use strict';

  class DocumentTypesCreateComponent {
    constructor(documentTypesServices){
  			this.documentTypesServices=documentTypesServices;
  		}
  		createTiposDocumentos(){

  			console.log(this.tipoDocumento);
  			this.documentTypesServices.save(this.documentType).$promise
  			.then(response=>{
         console.log("OK",response);
  			})
  			.catch(err =>console.log("ERROR",err));
  		}
  	}
  DocumentTypesCreateComponent.$inject=['documentTypesServices'];
  angular.module('startUpApp')
    .component('documentTypesCreate', {
      templateUrl: "app/document-types/document-types-create/document-types-create.html",
      controller: DocumentTypesCreateComponent,
      controllerAs: 'vm'
    })

})();
