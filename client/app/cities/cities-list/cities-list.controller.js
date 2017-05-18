(function() {
  'use strict';

  class CitiesListComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('citiesList', {
      templateUrl: "app/cities/cities-list/cities-list.html",
      controller: CitiesListComponent,
      controllerAs: 'vm'
    })

})();
