(function () {
  'use strict';

  class CitiesViewComponent {
    constructor(citiesService,$stateParams) {
      this.$stateParams = $stateParams;
      this.citiesService = citiesService;

    }

  }
angular.module('startUpApp')
  .component('citiesView',{
    templateUrl:"app/cities/cities-view/cities-view.html",
    controller:CitiesViewComponent,
    controllerAs:'vm'
  })


})();
