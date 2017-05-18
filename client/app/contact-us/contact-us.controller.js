(function() {
  'use strict';

  class ContactUsComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('contactUs', {
      templateUrl: "app/contact-us/contact-us.html",
      controller: ContactUsComponent,
      controllerAs: 'vm'
    })

})();
