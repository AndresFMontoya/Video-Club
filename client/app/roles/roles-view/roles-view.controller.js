(function () {
  'use strict';

  class RolesViewComponent {
    constructor(rolesService,$stateParams) {
      this.$stateParams = $stateParams;
      this.rolesService = rolesService;

    }

  }
angular.module('startUpApp')
  .component('rolesView',{
    templateUrl:"app/roles/roles-view/roles-view.html",
    controller:RolesViewComponent,
    controllerAs:'vm'
  })


})();
