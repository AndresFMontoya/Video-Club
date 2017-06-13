'use strict';

function routeManagerService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
   this.unlogged = ["users-update","works-profile","ironmongery-profile","users-list"];
   this.loggedTrabFerr= ["login","users-create"]
   
}

angular.module('startUpApp')
  .service('routeManager', routeManagerService);
