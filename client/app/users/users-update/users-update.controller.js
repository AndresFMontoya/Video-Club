(function() {
  'use strict';

  class UserUpdateComponent {
    constructor($auth, usersService, citiesService, $stateParams, $mdDialog,AuthService) {
      this.usersService = usersService;
      this.AuthService=AuthService;
      this.$auth = $auth;
      this.userId;
      this.gender = ["Masculino", "Femenino"];
      this.citiesService = citiesService;
      this.$stateParams = $stateParams;
      this.$mdDialog = $mdDialog;
      this.editar = false;
    }


    $onInit() {

      if (this.AuthService.isAdmin()) {

      } else {

      }

      this.citiesService.query().$promise
        .then(response => {

          this.cities = response;
        }).catch(err => {

          console.log("city error", err);
        });

      this.userId = this.$auth.getPayload().sub;

      this.usersService.get({
          id: this.$stateParams.id
        }).$promise
        .then(response => {
          this.user = response;
          console.log("usuario", this.user);
        }).catch(err => {

          console.log("error", err);
        });

      console.log("userId", this.userId);

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
        .ok('Modificar')
        .cancel('Cancelar');

      this.$mdDialog.show(this.confirm).then(()=> {

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

      },()=> {
        this.editar = false;
      })
    };


  }


  angular.module('startUpApp')
    .component('usersUpdate', {
      templateUrl: "app/users/users-update/users-update.html",
      controller: UserUpdateComponent,
      controllerAs: 'vm'
    })

})();
