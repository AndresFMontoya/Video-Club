'use strict';

(function(){

class WorkersListComponent {
  constructor(usersService,matchmedia) {
    this.usersService = usersService;
    this.matchmedia=matchmedia;
    this.matchmedia.on('(max-width: 800px)',(mediaQueryList)=>{
    this.list=mediaQueryList.matches;
  console.log("lista",this.list);

});
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
