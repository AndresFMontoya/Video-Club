'use strict';
(function(){

class WorksProfileComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('worksProfile', {
    templateUrl: 'app/users/users-profile/works-profile/works-profile.html',
    controller: WorksProfileComponent
  });

})();
