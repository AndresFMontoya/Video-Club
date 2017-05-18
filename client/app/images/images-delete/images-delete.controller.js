(function() {
  'use strict';

  class ImagesDeleteComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('imagesDelete', {
      templateUrl: "app/delete/images-delete/images-delete.html",
      controller: ImagesDeleteComponent,
      controllerAs: 'vm'
    })

})();
