(function () {
  'use strict';

  class departmentsViewComponent {
    constructor(citiesService,$stateParams) {
      this.$stateParams = $stateParams;
      this.departmentsService = departmentsService;

    }

  }
angular.module('startUpApp')
  .component('departmentsView',{
    templateUrl:"app/departments/departments-view/departments-view.html",
    controller:departmentsViewComponent,
    controllerAs:'vm'
  })


})();
