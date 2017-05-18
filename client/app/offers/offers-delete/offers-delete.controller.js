(function() {
  'use strict';

  class OffersDeleteComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('offersUpdate', {
      templateUrl: "app/offers/offers-delete/offers-delete.html",
      controller: OffersDeleteComponent,
      controllerAs: 'vm'
    })

})();
