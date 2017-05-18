(function() {
  'use strict';

  class WorksDoneListComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('worksDoneList', {
      templateUrl: "app/works-done/works-done-list/works-done-list.html",
      controller: WorksDoneListComponent,
      controllerAs: 'vm'
    })

})();
