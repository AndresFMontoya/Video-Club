(function() {
  'use strict';

  class WorksDoneUpdateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('worksDoneUpdate', {
      templateUrl: "app/works-done/works-done-update/works-done-update.html",
      controller: WorksDoneUpdateComponent,
      controllerAs: 'vm'
    })

})();
