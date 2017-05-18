(function() {
  'use strict';

  class ImagesUpdateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('imagesUpdate', {
      templateUrl: "app/images/images-update/images-update.html",
      controller: ImagesUpdateComponent,
      controllerAs: 'vm'
    })

})();
