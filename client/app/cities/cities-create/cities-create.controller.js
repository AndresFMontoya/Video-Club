(function() {
  'use strict';

  class CitiesCreateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('citiesCreate', {
      templateUrl: "app/cities/cities-create/cities-create.html",
      controller: CitiesCreateComponent,
      controllerAs: 'vm'
    })

})();
