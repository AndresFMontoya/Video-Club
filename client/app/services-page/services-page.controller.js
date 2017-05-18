(function() {
  'use strict';

  class ServicesPageComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('servicesPage', {
      templateUrl: "app/services-page/services-page.html",
      controller: ServicesPageComponent,
      controllerAs: 'vm'
    })

})();
