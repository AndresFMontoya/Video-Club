'use strict';

(function(){

class IronmongeryListComponent {
  constructor(usersService) {
    this.usersService = usersService;
  }
  $onInit(){

    this.usersService.getUsers({idRol:'FERR'}).$promise
    .then(response => {
      console.log("ferreterias",response);
      this.ironmongeries = response;
    })
    .catch(err => console.error(err));
  }
}

angular.module('startUpApp')
  .component('ironmongeryList', {
    templateUrl: 'app/users/users-list/ironmongery-list/ironmongery-list.html',
    controller: IronmongeryListComponent,
    controllerAs: 'vm'
  });

})();
