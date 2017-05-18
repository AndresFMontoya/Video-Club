(function() {
  'use strict';

  class CategoriesCreateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('categoriesCreate', {
      templateUrl: "app/categories/categories-create/categories-create.html",
      controller: CategoriesCreateComponent,
      controllerAs: 'vm'
    })

})();
