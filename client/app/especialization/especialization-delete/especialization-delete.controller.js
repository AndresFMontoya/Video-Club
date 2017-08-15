(function() {
  'use strict';

  class EspecializationDeleteComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('especializationDelete', {
      templateUrl: "app/especialization-delete/especialization-delete.html",
      controller: EspecializationDeleteComponent,
      controllerAs: 'vm'
    })

})();
