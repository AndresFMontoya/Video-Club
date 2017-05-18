(function() {
  'use strict';

  class OffersViewComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('offersView', {
      templateUrl: "app/offers/offers-view/offers-view.html",
      controller: OffersViewComponent,
      controllerAs: 'vm'
    })

})();
