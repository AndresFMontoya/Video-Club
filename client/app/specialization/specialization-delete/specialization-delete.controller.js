(function() {
  'use strict';

  class SpecializationDeleteComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('specializationDelete', {
      templateUrl: "app/specialization-delete/specialization-delete.html",
      controller: SpecializationDeleteComponent,
      controllerAs: 'vm'
    })

})();
