'use strict';

(function(){

class RestrictedComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('restricted', {
    templateUrl: 'app/restricted/restricted.html',
    controller: RestrictedComponent,
    controllerAs: 'restrictedCtrl'
  });

})();
