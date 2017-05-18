(function() {
  'use strict';

  angular.module('startUpApp')
    .config(config);

  config.inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state(
        'packages-type-create', {
          url: '/packages-type-create',
          template: '<packages-type-create></packages-type-create>'
        })
      .state(
        'packages-type-delete', {
          url: '/packages-type-delete',
          template: '<packages-type-delete></packages-type-delete>'
        })
      .state(
        'packages-type-list', {
          url: '/packages-type-list',
          template: '<packages-type-list></packages-type-list>'
        })
      .state(
        'packages-type-update', {
          url: '/packages-type-update',
          template: '<packages-type-update></packages-type-update>'
        })
      .state(
        'packages-type-view', {
          url: '/packages-typeviewt',
          template: '<packages-type-view></packages-type-view>'
        });
  }

})();
