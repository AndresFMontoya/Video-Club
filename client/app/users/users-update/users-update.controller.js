(function() {
  'use strict';

  class UserUpdateComponent {
    constructor() {
      this.hola = "Hola ADSI";
    }
  }

  angular.module('startUpApp')
    .component('userUpdate', {
      templateUrl: "app/user/user-update/user-update.html",
      controller: UserUpdateComponent,
      controllerAs: 'vm'
    })

})();
