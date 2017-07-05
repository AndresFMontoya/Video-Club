'use strict';

(function() {

  class MainController {

    constructor(usersService) {
      this.usersService = usersService;

    }
    $onInit(){

      this.usersService.onIndex().$promise
      .then(response => {
        console.log("trabajadores",response);
        this.users = response;
      })
      .catch(err => console.error(err));
    }

  }
MainController.$inject=["usersService"];
  angular.module('startUpApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:'vm'
    });
})();
