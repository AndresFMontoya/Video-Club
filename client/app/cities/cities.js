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
          template: '<cities-create></cities-create>'
        })
      .state(
        'cities-list', {
          url: '/cities-list',
          template: '<cities-list></cities-list>'
        })
      .state(
        'cities-update', {
          url: '/cities-update',
          template: '<cities-update></cities-update>'
        })
      .state(
        'cities-view', {
          url: '/cities-view',
          template: '<cities-view></cities-view>'
        });
  }

})();
