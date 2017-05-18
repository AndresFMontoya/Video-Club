(function() {
  'use strict';

  class OffersCreateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('offersCreate', {
      templateUrl: "app/offers/offers-create/offers-create.html",
      controller: OffersCreateComponent,
      controllerAs: 'vm'
    })

})();
