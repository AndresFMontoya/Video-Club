(function() {
  'use strict';

  class EnvironmentComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('environment', {
      templateUrl: "app/environment/environment.html",
      controller: EnvironmentComponent,
      controllerAs: 'vm'
    })

})();
