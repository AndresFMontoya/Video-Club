'use strict';

(function() {

  class MainController {

    constructor($auth,matchmedia) {
      this.$auth = $auth;
      this.matchmedia=matchmedia;
      this.tablet = this.matchmedia.isTablet();
      this.matchmedia.on('(max-width: 800px)', function(mediaQueryList){
    console.log(mediaQueryList.matches);
  });
    }

    $onInit() {
      if(this.tablet){
	console.log("tablet");
}

    }

  }
MainController.$inject=["$auth","matchmedia"];
  angular.module('startUpApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:'vm'
    });
})();
