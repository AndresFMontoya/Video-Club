(function() {
  'use strict';

  class UsersListComponent {
    constructor(usersService) {
      this.usersService = usersService;

      this.tipos = [{
        model : "ferreterias"
      },{

        model : "trabajadores"

      }
        ];
      this.user;
      this.disabled =true;

    }
    $onInit(){


        console.log("tipos",this.tipos);
        this.usersService.query().$promise
        .then(response=>{

         for (let i = 0; i < response.length; i++) {
           response[i].edited=false;
         }

          this.users=response;
          console.log("users", this.users);
        }).catch(err=>{
          console.log(err);
        });

    }

  }
 UsersListComponent.$inject=['usersService'];
  angular.module('startUpApp')
    .component('usersList', {
      templateUrl: "app/users/users-list/users-list.html",
      controller: UsersListComponent,
      controllerAs: 'vm'
    })

})();
