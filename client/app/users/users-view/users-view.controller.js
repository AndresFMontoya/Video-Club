(function () {
  'use strict';

  class UsersViewComponent {
    constructor(usersService,$stateParams) {
          this.$stateParams= $stateParams;
          this.usersService = usersService;

      }
       $onInit() {

            this.usersService.get({id:this.$stateParams.id}).$promise
            .then(response=>{
              // console.log("USUARIOS",response)
              this.usuario=response;
              console.log(this.usuario);
            });

        }

  }
angular.module('startUpApp')
  .component('usersView',{
    templateUrl:"app/users/users-view/users-view.html",
    controller:UsersViewComponent,
    controllerAs:'vm'
  })


})();
