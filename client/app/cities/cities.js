(function() {
  'use strict';

  angular.module('startUpApp')
    .config(config);

  config.inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state(
        'cities-create', {
          url: '/cities-create',
          authenticate: ["ADMIN"],
          template: '<cities-create></cities-create>'
        })
      .state(
        'cities-list', {
          url: '/cities-list',
          authenticate: ["ADMIN"],
          template: '<cities-list></cities-list>'
        })
      .state(
        'cities-update', {
          url: '/cities-update',
          authenticate: ["ADMIN"],
          template: '<cities-update></cities-update>'
        })
      .state(
        'cities-view', {
          url: '/cities-view',
          authenticate: ["ADMIN"],
          template: '<cities-view></cities-view>'
        });
  }

})();
