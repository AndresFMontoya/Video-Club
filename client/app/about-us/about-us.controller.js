(function() {
  'use strict';

  class AboutUsComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('aboutUs', {
      templateUrl: "app/about-us/about-us.html",
      controller: AboutUsComponent,
      controllerAs: 'vm'
    })

})();
