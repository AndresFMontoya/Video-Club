'use strict';

(function(){

class WorkersUpdateComponent {
  constructor($mdDialog,usersService,$auth) {
    this.$mdDialog = $mdDialog;
    this.editar = false;
    this.usersService=usersService;
    this.rol;
    this.$auth=$auth;
  }

  $onInit() {


  }

op(){
this.rol=this.$auth.getPayload().roles;
  this.usersService.op({op:this.rol},this.user).$promise
    .then(response => {
      console.log("op", response);
    })
    .catch(err => {
      console.log("ERROR", err)
      this.validacion = err;
      alert(this.validacion.data)
    });

}
  modificar() {

   if (this.editar == false) {

     this.editar = true;

   } else {
     this.editar = false;
   }
 }
  showConfirm(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    console.log("dialog");
    this.confirm = this.$mdDialog.confirm()
      .title('Seguro que quiere modificar el usuario?')
      .textContent('Los cambios hechos no se pueden deshacer.')
      .ariaLabel('')
      .targetEvent(ev)
      .ok('Aceptar')
      .cancel('Cancelar');

    this.$mdDialog.show(this.confirm).then(() => {

      if (this.newPassw) {
        this.user.password = this.newPassword;
      }
      this.user.active = false;
      this.usersService.update(this.user).$promise
        .then(response => {
          console.log("usuario", this.user);
          this.editar = false;
        }).catch(err => {

          console.log("error", err);
        });

    }, () => {
      this.editar = false;
    })
  };
}

angular.module('startUpApp')
  .component('workersUpdate', {
    templateUrl: 'app/users/users-update/workers-update/workers-update.html',
    controller: WorkersUpdateComponent,
    controllerAs: 'vm'
  });

})();
