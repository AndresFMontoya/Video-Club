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
    }
    $onInit(){


console.log("tipos",this.tipos);
        this.usersService.query().$promise
        .then(response=>{
          this.users=response;
          console.log("users", this.users);
        }).catch(err=>{
          console.log(err);
        });

    }

    op(item){

       this.user=item;


      this.usersService.update(this.user).$promise
        .then(response=>{
          console.log("usuario modificado",item);
        }).catch(err=>{

          console.log("error",err);
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
