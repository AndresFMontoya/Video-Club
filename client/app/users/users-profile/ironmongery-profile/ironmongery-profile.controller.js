'use strict';
(function(){

class IronmongeryProfileComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('ironmongeryProfile', {
    templateUrl: 'app/users/users-profile/ironmongery-profile/ironmongery-profile.html',
    controller: IronmongeryProfileComponent
  });

})();
