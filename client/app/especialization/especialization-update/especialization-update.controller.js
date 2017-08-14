(function() {
  'use strict';

  class EspecializationUpdateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('especializationUpdate', {
      templateUrl: "app/especialization-update/especialization-update.html",
      controller: EspecializationUpdateComponent,
      controllerAs: 'vm'
    })

})();
