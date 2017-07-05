'use strict';

(function(){

class IronmongeryListComponent {
  constructor(usersService) {
    this.usersService = usersService;
  }
  $onInit(){

    this.usersService.getIronmongeries().$promise
    .then(response => {
      console.log("ferreterias",response);
      this.ironmongeries = response;
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
  .component('ironmongeryList', {
    templateUrl: 'app/users/users-list/ironmongery-list/ironmongery-list.html',
    controller: IronmongeryListComponent,
    controllerAs: 'vm'
  });

})();
