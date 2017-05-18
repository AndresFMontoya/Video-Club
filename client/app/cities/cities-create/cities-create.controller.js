(function() {
  'use strict';

  class CitiesCreateComponent {
    constructor() {
    }
    $onInit() {
    }
  }

  angular.module('startUpApp')
    .component('citiesCreate', {
      templateUrl: "app/cities/cities-create/cities-create.html",
      controller: CitiesCreateComponent,
      controllerAs: 'vm'
    })

})();
