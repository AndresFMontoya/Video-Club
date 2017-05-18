(function() {
  'use strict';

  class DepartmentsListComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('departmentsList', {
      templateUrl: "app/departments/departments-list/departments-list.html",
      controller: DepartmentsListComponent,
      controllerAs: 'vm'
    })

})();
