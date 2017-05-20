'use strict';
(function(){

class AdministrationComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('administration', {
    templateUrl: 'app/administration/administration.html',
    controller: AdministrationComponent
  });

})();
