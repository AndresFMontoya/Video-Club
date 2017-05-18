(function() {
  'use strict';

  class CategoriesListComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('categoriesList', {
      templateUrl: "app/categories/categories-list/categories-list.html",
      controller: CategoriesListComponent,
      controllerAs: 'vm'
    })

})();
