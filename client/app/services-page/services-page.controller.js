(function() {
  'use strict';

  class ServicesPageComponent {
    constructor(especializationService) {
      this.especializationService = especializationService;
      this.hola = "Hola ADSI";
    }
    $onInit(){

      this.especializationService.query().$promise
      .then(response => {
        console.log("especializaciones",response);
        this.especializations = response;
      })
      .catch(err => console.error(err));
    }
  }

  angular.module('startUpApp')
    .component('servicesPage', {
      templateUrl: "app/services-page/services-page.html",
      controller: ServicesPageComponent,
      controllerAs: 'vm'
    })

})();
