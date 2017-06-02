'use strict';

(function() {

  class MainController {

    constructor($auth) {
      this.$auth = $auth;
    }

    $onInit() {
    console.log(this.$auth.isAuthenticated());
    }
  }
MainController.$inject=["$auth"];
  angular.module('startUpApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:'vm'
    });
})();
