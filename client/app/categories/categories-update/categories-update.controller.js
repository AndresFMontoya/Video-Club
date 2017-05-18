(function() {
  'use strict';

  class CategoriesUpdateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('categoriesUpdate', {
      templateUrl: "app/categories/categories-update/categories-update.html",
      controller: CategoriesUpdateComponent,
      controllerAs: 'vm'
    })

})();
