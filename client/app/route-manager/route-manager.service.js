'use strict';

function routeManagerService() {
  // AngularJS will instantiate a singleton by calling "new" on this function
  this.unlogged = [
    "works-profile",
    "ironmongery-profile",
    "ironmongery-list",
    "ironmongery-update",
    "workers-list",
    "workers-update"
  ];
  this.users=[
    "FERR",
    "ADMIN"
  ]
  this.loggedTrabFerr = [
    "login",
    "users-create",
    "ironmongery-list",
    "ironmongery-update",
    "workers-list",
    "workers-update"
  ];

}

angular.module('startUpApp')
  .service('routeManager', routeManagerService);
