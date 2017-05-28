'use strict';

class NavbarController {

  constructor($auth,AuthService,usersService){

this.$auth=$auth;
this.AuthService=AuthService;
this.usersService=usersService;
this.userId;

  }

  $onInit(){

    this.userId=this.$auth.getPayload().sub;

   this.usersService.get({id:this.userId}).$promise
     .then(response=>{
       this.user=response;
       console.log("usuario",this.user);
     }).catch(err=>{

       console.log("error",err);
     });


  }

  isAuthenticated(){

  return this.$auth.isAuthenticated();

  }

  logout(){

  this.AuthService.logout();

  }


}
NavbarController.$inject=['$auth','AuthService','usersService'];
angular.module('startUpApp')
  .controller('NavbarController', NavbarController);
