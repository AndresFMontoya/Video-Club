'use strict';

(function(){

class LoginComponent {
  constructor(AuthService) {
    this.AuthService = AuthService;
  }

  loguearUsuario(){
    this.AuthService.login(this.user);
  }
}
LoginComponent.$inject=['AuthService'];
angular.module('startUpApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent,
    controllerAs: 'vm'
  });

})();
