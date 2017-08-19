'use strict';

(function(){

class PasswordRecoverComponent {
  constructor(toastr,usersService) {
    this.toastr=toastr;
    this.usersService=usersService;
    this.ok=false;
  }

  enviar(){

    this.usersService.recover(this.user).$promise
      .then(response => {
        this.ok=true;
        this.op="op"
        this.toastr.info("enviado","informacion");
      }).catch(err => {
        this.toastr.warning(err.data,"error");
        this.op="noOp"
      });
  }
}

angular.module('startUpApp')
  .component('passwordRecover', {
    templateUrl: 'app/users/password-recover/password-recover.html',
    controller: PasswordRecoverComponent,
    controllerAs: 'vm'
  });

})();
