'use strict';
(function(){

  class WorksProfileComponent {
    constructor($auth,userService) {
      this.message = 'Hello';
      this.$auth=$auth;
      this.userId;
    }

    $onInit(){

   this.userId=this.$auth.getPayload().sub;

   console.log("userId",this.userId);

    }
  }


angular.module('startUpApp')
  .component('worksProfile', {
    templateUrl: 'app/users/users-profile/works-profile/works-profile.html',
    controller: WorksProfileComponent
  });

})();
