(function() {
  'use strict';

  class DepartmentsUpdateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('departmentsUpdate', {
      templateUrl: "app/departments/departments-update/departments-update.html",
      controller: DepartmentsUpdateComponent,
      controllerAs: 'vm'
    })

})();
