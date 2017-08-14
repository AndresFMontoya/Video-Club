(function() {
  'use strict';

  class EspecializationViewComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('especializationView', {
      templateUrl: "app/especialization-view/especialization-view.html",
      controller: EspecializationViewComponent,
      controllerAs: 'vm'
    })

})();
