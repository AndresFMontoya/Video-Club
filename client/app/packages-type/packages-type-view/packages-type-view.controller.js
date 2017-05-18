(function() {
  'use strict';

  class PackagesTypeViewComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('packagesViewCreate', {
      templateUrl: "app/document-type/document-type-view/document-type-view.html",
      controller: PackagesTypeViewComponent,
      controllerAs: 'vm'
    })

})();
