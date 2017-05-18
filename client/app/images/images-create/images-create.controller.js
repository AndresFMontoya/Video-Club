(function() {
  'use strict';

  class ImagesCreateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('imagesCreate', {
      templateUrl: "app/images/images-create/images-create.html",
      controller: ImagesCreateComponent,
      controllerAs: 'vm'
    })

})();
