'use strict';

(function(){

class IronmongeryListComponent {
  constructor(usersService,matchmedia) {
    this.usersService = usersService;
    this.matchmedia=matchmedia;
    this.matchmedia.on('(max-width: 800px)',(mediaQueryList)=>{
    this.list=mediaQueryList.matches;
  console.log("lista",this.list);

});
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
