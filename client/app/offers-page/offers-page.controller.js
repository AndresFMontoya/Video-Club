(function() {
  'use strict';

  class OffersPageComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('offersPage', {
      templateUrl: "app/offers-page/offers-page.html",
      controller: OffersPageComponent,
      controllerAs: 'vm'
    })

})();
