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
      this.editar={
        name:false,
        lastName:false,
        gender:false,
        phoneNumber:false,
        gender:false,
        city:false
      }


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

    for (let y in this.editar) {
        this.editar[y]=false;
    }
    if(this.newPassw){
      this.user.password=this.newPassword;
    }
    if (this.croppedImage) {


               var newImagen = this.croppedImage.split(',');
               this.user.imageType = newImagen[0];
               this.user.imageProfile = newImagen[1];
           }

          console.log("crop",this.croppedImage);
           console.log("imagetype",this.user.imageType);
           console.log("imageProfile",this.user.imageProfile);
    this.user.active=true;
    this.usersService.update(this.user).$promise
      .then(response=>{
        console.log("usuario",this.user);
      }).catch(err=>{

        console.log("error",err);
      });
  }



  imageLoad($fileContent) {
            this.image = $fileContent;
        }

      cancelar(){

        this.croppedImage=null;

      }
      boton(){

        for (let x in this.editar) {

          if (this.editar[x]==false) {
            this.editar[x]=false;
          } else {
            this.editar[x]=true;
          }
        }
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
