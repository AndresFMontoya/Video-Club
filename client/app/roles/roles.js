(function() {
  'use strict';

  angular.module('startUpApp')
  .config(config);

  config.inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
    .state(
      'roles-create', {
        url: '/roles-create',
        authenticate: ["ADMIN"],
        template: '<roles-create></roles-create>'
      })
      .state(
        'roles-list', {
          url: '/roles-list',
          authenticate: ["ADMIN"],
          template: '<roles-list></roles-list>'
        })
        .state(
          'roles-delete', {
            url: '/roles-delete',
            authenticate: ["ADMIN"],
            template: '<roles-delete></roles-delete>'
          })
          .state(
            'roles-update', {
              url: '/roles-update',
              authenticate: ["ADMIN"],
              template: '<roles-update></roles-update>'
            })
            .state(
              'roles-view', {
                url: '/roles-view',
                authenticate: ["ADMIN"],
                template: '<roles-view></roles-view>'
              });
  }

})();
