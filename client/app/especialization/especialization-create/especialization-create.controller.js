(function() {
  'use strict';

  class EspecializationCreateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('especializationCreate', {
      templateUrl: "app/especialization-create/especialization-create.html",
      controller: EspecializationCreateComponent,
      controllerAs: 'vm'
    })

})();
