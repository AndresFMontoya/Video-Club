'use strict';

(function(){

class NotFoundComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('notFound', {
    templateUrl: 'app/not-found/not-found.html',
    controller: NotFoundComponent,
    controllerAs: 'notFoundCtrl'
  });

})();
