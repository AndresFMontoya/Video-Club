(function() {
  'use strict';

  class SpecializationUpdateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('specializationUpdate', {
      templateUrl: "app/specialization-update/specialization-update.html",
      controller: SpecializationUpdateComponent,
      controllerAs: 'vm'
    })

})();
