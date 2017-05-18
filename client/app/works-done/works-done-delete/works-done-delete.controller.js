(function() {
  'use strict';

  class WorksDoneDeleteComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('worksDoneDelete', {
      templateUrl: "app/works-done/works-done-delete/works-done-delete.html",
      controller: WorksDoneDeleteComponent,
      controllerAs: 'vm'
    })

})();
