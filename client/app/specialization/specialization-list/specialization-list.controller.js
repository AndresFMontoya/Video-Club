(function() {
  'use strict';

  class SpecializationListComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('specializationList', {
      templateUrl: "app/specialization-list/specialization-list.html",
      controller: SpecializationListComponent,
      controllerAs: 'vm'
    })

})();
