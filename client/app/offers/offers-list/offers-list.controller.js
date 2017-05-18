(function() {
  'use strict';

  class OffersListComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('offersList', {
      templateUrl: "app/offers/offers-list/offers-list.html",
      controller: OffersListComponent,
      controllerAs: 'vm'
    })

})();
