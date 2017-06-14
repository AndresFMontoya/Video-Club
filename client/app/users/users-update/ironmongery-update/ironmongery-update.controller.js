'use strict';

(function() {

  class IronmongeryUpdateComponent {
    constructor($mdDialog) {
      this.$mdDialog = $mdDialog;
      this.editar = false;
    }

    $onInit() {


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
    .component('ironmongeryUpdate', {
      templateUrl: 'app/users/users-update/ironmongery-update/ironmongery-update.html',
      controller: IronmongeryUpdateComponent,
      controllerAs: 'vm'
    });

})();
