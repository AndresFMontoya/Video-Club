(function() {
  'use strict';

  class WorksDoneViewComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('worksDoneView', {
      templateUrl: "app/works-done/works-done-list/works-done-list.html",
      controller: WorksDoneViewComponent,
      controllerAs: 'vm'
    })

})();
