'use strict';

class NavbarController {

  constructor($auth,AuthService){

this.$auth=$auth;
this.AuthService=AuthService;

  }

  $onInit(){



  }

  isAuthenticated(){

  return this.$auth.isAuthenticated();

  }

  logout(){

  this.AuthService.logout();

  }


}
NavbarController.$inject=['$auth','AuthService'];
angular.module('startUpApp')
  .controller('NavbarController', NavbarController);
