'use strict';

(function(){

class PasswordRecoverComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('passwordRecover', {
    templateUrl: 'app/users/password-recover/password-recover.html',
    controller: PasswordRecoverComponent,
    controllerAs: 'vm'
  });

})();
