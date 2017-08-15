(function() {
  'use strict';

  class EspecializationListComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('especializationList', {
      templateUrl: "app/especialization-list/especialization-list.html",
      controller: EspecializationListComponent,
      controllerAs: 'vm'
    })

})();
