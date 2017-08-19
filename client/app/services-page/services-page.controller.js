(function() {
  'use strict';

  class ServicesPageComponent {
    constructor(especializationService,citiesService,departmentsService) {
      this.especializationService = especializationService;
      this.citiesService = citiesService;
      this.departmentsService= departmentsService;

      this.hola = "Hola ADSI";
    }
    $onInit(){
      this.departmentsService.query().$promise
      .then(response => {
        this.departments=response;
        console.log("Departamentos",response);
      })
      .catch(err => console.log(err));
      this.citiesService.query().$promise
      .then(response => {
        this.cities=response;
        console.log("ciudades",response);
      })
      .catch(err => console.log(err));
      this.especializationService.query().$promise
      .then(response => {
        console.log("especializaciones",response);
        this.especializations = response;
      })
      .catch(err => console.error(err));

      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    }

  }

  angular.module('startUpApp')
    .component('servicesPage', {
      templateUrl: "app/services-page/services-page.html",
      controller: ServicesPageComponent,
      controllerAs: 'vm'
    })

})();
