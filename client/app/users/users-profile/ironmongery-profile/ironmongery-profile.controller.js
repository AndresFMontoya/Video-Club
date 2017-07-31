'use strict';
(function() {

  class IronmongeryProfileComponent {
    constructor($auth, usersService, citiesService, departmentsService) {
      this.usersService = usersService;
      this.$auth = $auth;
      this.userId;
      this.citiesService = citiesService;
      this.departmentsService = departmentsService;

    }


    $onInit() {

      //FUNCION PARA DESPLEGAR LA OPCION DE SUBIR OFERTAS

        $('.ironmongery-Profile-WorkDone').click(function() {
          console.log('click');
          $('.ironmongery-Profile-flexContainer').slideToggle();
        });


      this.departmentsService.query().$promise
        .then(response => {

          this.departments = response;
        }).catch(err => {

          console.log("departments error", err);
        });

      this.userId = this.$auth.getPayload().sub;

      this.usersService.get({
          id: this.userId
        }).$promise
        .then(response => {
          this.user = response;
          console.log("usuario", this.user);
        }).catch(err => {

          console.log("error", err);
        });

      console.log("userId", this.userId);

    }

    getCiudad() {
      this.citiesService.getCiudades({
          idDepartment: this.idDepartment
        }).$promise
        .then(response => {
          console.log("Ciudades", response);
          this.cities = response;
        })
        .catch(err => {
          console.log(err);
        })

    }

    editUser() {
      if (this.newPassw) {
        this.user.password = this.newPassword;
      }
      this.user.active = true;
      this.usersService.update(this.user).$promise
        .then(response => {
          console.log("usuario", this.user);
        }).catch(err => {

          console.log("error", err);
        });
    }


  }
  IronmongeryProfileComponent.$inject = ['$auth', 'usersService',
    'citiesService', 'departmentsService'
  ];

  angular.module('startUpApp')
    .component('ironmongeryProfile', {
      templateUrl: 'app/users/users-profile/ironmongery-profile/ironmongery-profile.html',
      controller: IronmongeryProfileComponent,
      controllerAs: 'vm'
    });

})();
