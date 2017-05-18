(function() {
  'use strict';

  class SpecializationCreateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('specializationCreate', {
      templateUrl: "app/specialization-create/specialization-create.html",
      controller: SpecializationCreateComponent,
      controllerAs: 'vm'
    })

})();
