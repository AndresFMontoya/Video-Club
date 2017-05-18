(function() {
  'use strict';

  class OffersUpdateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('offersUpdate', {
      templateUrl: "app/offers/offers-update/offers-update.html",
      controller: OffersUpdateComponent,
      controllerAs: 'vm'
    })

})();
