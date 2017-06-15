'use strict';
(function(){

  class WorksProfileComponent {
    constructor($auth,usersService,citiesService,departmentsService) {
      this.usersService =usersService;
      this.$auth=$auth;
      this.userId;
      this.gender = ["Masculino", "Femenino"];
      this.citiesService=citiesService;
      this.departmentsService=departmentsService;

    }


    $onInit(){

      this.departmentsService.query().$promise
        .then(response=>{

          this.departments=response;
        }).catch(err=>{

          console.log("departments error",err);
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

    getCiudad(){
   this.citiesService.getCiudades({idDepartment:this.idDepartment}).$promise
   .then(response =>{
     console.log("Ciudades",response);
     this.cities = response;
   })
   .catch(err =>{
     console.log(err);
   })

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
WorksProfileComponent.$inject=['$auth','usersService','citiesService','departmentsService'];
angular.module('startUpApp')
  .component('worksProfile', {
    templateUrl: 'app/users/users-profile/works-profile/works-profile.html',
    controller: WorksProfileComponent,
    controllerAs:'vm'
  });

})();
