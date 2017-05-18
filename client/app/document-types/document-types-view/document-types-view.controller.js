(function() {
  'use strict';

  class DocumentTypesViewComponent {
    constructor(documentTypesServices,$stateParams) {
            this.$stateParams= $stateParams;
            this.documentTypesServices = documentTypesServices;

        }
         $onInit() {

              this.documentTypesServices.get({id:this.$stateParams.id}).$promise
  						.then(response=>{
  							// console.log("USUARIOS",response)
                this.documentType=response;
                console.log(this.documentType);
  						});

          }
  }

  angular.module('startUpApp')
    .component('documentTypesView', {
      templateUrl: "app/document-types/document-types-view/document-types-view.html",
      controller: DocumentTypesViewComponent,
      controllerAs: 'vm'
    })

})();
