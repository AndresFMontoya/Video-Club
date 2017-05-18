(function() {
  'use strict';

  class DepartmentsCreateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('departmentsCreate', {
      templateUrl: "app/departments/departments-create/departments-create.html",
      controller: DepartmentsCreateComponent,
      controllerAs: 'vm'
    })

})();
