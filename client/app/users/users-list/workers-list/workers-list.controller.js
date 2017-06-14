'use strict';

(function(){

class WorkersListComponent {
  constructor(usersService) {
    this.usersService = usersService;
  }
  $onInit(){

    this.usersService.getUsers({idRol:'TRAB'}).$promise
    .then(response => {
      console.log("trabajadores",response);
      this.workers = response;
    })
    .catch(err => console.error(err));
  }
}

angular.module('startUpApp')
  .component('workersList', {
    templateUrl: 'app/users/users-list/workers-list/workers-list.html',
    controller: WorkersListComponent,
    controllerAs: 'vm'
  });

})();
