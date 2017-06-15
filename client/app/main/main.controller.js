'use strict';

(function() {

  class MainController {

    constructor(matchmedia) {
      this.matchmedia=matchmedia;
      this.tablet = this.matchmedia.isTablet();
      this.matchmedia.on('(max-width: 800px)',(mediaQueryList)=>{
      this.list=mediaQueryList.matches;
    console.log("lista",this.list);

  });
    }

    $onInit() {
      if(this.tablet){
	console.log("tablet");
}

    }

  }
MainController.$inject=["matchmedia"];
  angular.module('startUpApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:'vm'
    });
})();
