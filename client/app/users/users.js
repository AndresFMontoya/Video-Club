(function() {
  'use strict';

  angular.module('startUpApp')
    .config(config);

  config.inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('users-create', {
        url: '/users-create',
        template: '<users-create></users-create>'
      })
      .state('users-update', {
        url: '/users-update/:id',
        authenticate: ["ADMIN"],
        template: '<users-update></users-update>'
      })
      .state('users-remove', {
        url: '/users-remove',
        authenticate: ["ADMIN"],
        template: '<users-remove></users-remove>'
      })
      .state('users-view', {
        url: '/users-view/:id',
        authenticate: ["ADMIN"],
        template: '<users-view></users-view>'
      })
      .state(
        'users-delete', {
          url: '/users-delete',
          authenticate: ["ADMIN"],
          template: '<users-delete></users-delete>'
        })
      .state('ironmongery-list', {
        url: '/ironmongery-list',
        authenticate: ["ADMIN"],
        template: '<ironmongery-list></ironmongery-list>'
      })
      .state('ironmongery-update', {
        url: '/ironmongery-update/:id',
        authenticate: ["ADMIN"],
        template: '<ironmongery-update></ironmongery-update>'
      })
      .state('workers-list', {
        url: '/workers-list',
        authenticate: ["ADMIN"],
        template: '<workers-list></workers-list>'
      })
      .state('workers-update', {
        url: '/workers-update/:id',
        authenticate: ["ADMIN"],
        template: '<workers-update></workers-update>'
      });



  }


})();
