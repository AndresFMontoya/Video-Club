(function() {
  'use strict';

  class WorksDoneCreateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('worksDoneCreate', {
      templateUrl: "app/works-done/works-done-create/works-done-create.html",
      controller: WorksDoneCreateComponent,
      controllerAs: 'vm'
    })

})();
