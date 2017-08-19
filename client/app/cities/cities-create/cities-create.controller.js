(function() {
  'use strict';

  class CitiesCreateComponent {
    constructor(citiesService) {
      this.citiesService=citiesService;
    }
    $onInit() {
    }

    query(searchText){
    return this.citiesService.getCiudades({name:searchText}).$promise
     .then(function(data) {
        // Map the response object to the data object.
        return data;
      })

      }

      op(element){
        console.log("element",element);
      }
  }
CitiesCreateComponent.$inject=['citiesService'];
  angular.module('startUpApp')
    .component('citiesCreate', {
      templateUrl: "app/cities/cities-create/cities-create.html",
      controller: CitiesCreateComponent,
      controllerAs: 'vm'
    })

})();
