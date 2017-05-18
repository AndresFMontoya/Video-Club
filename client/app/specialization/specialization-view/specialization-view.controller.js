(function() {
  'use strict';

  class SpecializationViewComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('specializationView', {
      templateUrl: "app/specialization-view/specialization-view.html",
      controller: SpecializationViewComponent,
      controllerAs: 'vm'
    })

})();
