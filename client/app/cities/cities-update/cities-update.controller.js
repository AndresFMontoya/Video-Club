(function() {
  'use strict';

  class CitiesUpdateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('citiesUpdate', {
      templateUrl: "app/cities/cities-update/cities-update.html",
      controller: CitiesUpdateComponent,
      controllerAs: 'vm'
    })

})();
