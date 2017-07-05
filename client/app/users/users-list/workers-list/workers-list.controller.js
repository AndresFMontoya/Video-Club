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

    this.usersService.getWorkers().$promise
    .then(response => {
      console.log("trabajadores",response);
      this.workers = response;
    })
    .catch(err => console.error(err));
  }

  updateState(item){

console.log("item",item);
    this.usersService.update(item).$promise
      .then(response => {
        console.log("usuario", item);
        this.editar = false;
      }).catch(err => {

        console.log("error", err);
      });

  }
}

angular.module('startUpApp')
  .component('workersList', {
    templateUrl: 'app/users/users-list/workers-list/workers-list.html',
    controller: WorkersListComponent,
    controllerAs: 'vm'
  });

})();
