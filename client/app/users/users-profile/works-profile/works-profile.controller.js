'use strict';
(function(){

  class WorksProfileComponent {
    constructor($auth,usersService,citiesService) {
      this.usersService =usersService;
      this.$auth=$auth;
      this.userId;
      this.gender = ["Masculino", "Femenino"];
      this.citiesService=citiesService;
    }


    $onInit(){

      this.citiesService.query().$promise
        .then(response=>{

          this.cities=response;
        }).catch(err=>{

          console.log("city error",err);
        });

       this.userId=this.$auth.getPayload().sub;

      this.usersService.get({id:this.userId}).$promise
        .then(response=>{
          this.user=response;
          console.log("usuario",this.user);
        }).catch(err=>{

          console.log("error",err);
        });

   console.log("userId",this.userId);

    }

      editUser(){
        if(this.newPassw){
          this.user.password=this.newPassword;
        }
        this.user.active=true;
        this.usersService.update(this.user).$promise
          .then(response=>{
            console.log("usuario",this.user);
          }).catch(err=>{

            console.log("error",err);
          });
      }

  }

WorksProfileComponent.$inject=['$auth','usersService','citiesService'];
angular.module('startUpApp')
  .component('worksProfile', {
    templateUrl: 'app/users/users-profile/works-profile/works-profile.html',
    controller: WorksProfileComponent,
    controllerAs:'vm'
  });

})();
