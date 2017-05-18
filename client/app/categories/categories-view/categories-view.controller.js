(function() {
  'use strict';

  class CategoriesViewComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('categoriesView', {
      templateUrl: "app/categories/categories-view/categories-view.html",
      controller: CategoriesViewComponent,
      controllerAs: 'vm'
    })

})();
