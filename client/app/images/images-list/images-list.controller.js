(function() {
  'use strict';

  class ImagesListComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('imagesList', {
      templateUrl: "app/images/images-list/images-list.html",
      controller: ImagesListComponent,
      controllerAs: 'vm'
    })

})();
