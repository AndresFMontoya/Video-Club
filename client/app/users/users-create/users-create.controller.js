(function() {
  'use strict';

  class UsersCreateComponent {
    constructor(usersService, documentTypesService) {
      this.usersService = usersService;
      this.documentTypesService = documentTypesService;
    }
    //$Oninit starts when users-create loads
    $onInit() {
      //This part of the code allows you to bring document types from the backend
      this.documentTypesService.query().$promise
        .then(response => {
          this.documentTypes = response;
          console.log("TIPOS DOCUMENTOS", this.documentTypes);
        })
        .catch(err => console.log("ERROR", err));
    }

   //This method allows to register a user
    createUsuario() {
      console.log(this.user);
      this.usersService.save(this.user).$promise
        .then(response => {
          this.user = {};
          this.passwordConfirm = "";
          this.emailConfirm = "";
          console.log("Usuario Registrado", response);
        })
        .catch(err => {
          console.log("ERROR", err)
          this.validacion = err;
          alert(this.validacion.data)
        });
    }

    //This method allows you to clear the form when you change the document type
    limpiarUsuario(valor) {
      this.user = {
        idDocumentType: {
          id: valor
        }
      };
      this.passwordConfirm = "";
      this.emailConfirm = "";
      console.log(this.user);
    }

  }
  UsersCreateComponent.$inject = ['usersService', 'documentTypesService'];

  angular.module('startUpApp')
    .component('usersCreate', {
      templateUrl: "app/users/users-create/users-create.html",
      controller: UsersCreateComponent,
      controllerAs: 'vm'
    })

})();
