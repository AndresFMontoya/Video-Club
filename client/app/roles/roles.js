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
        template: '<roles-create></roles-create>'
      })
      .state(
        'roles-list', {
          url: '/roles-list',
          template: '<roles-list></roles-list>'
        })
        .state(
          'roles-delete', {
            url: '/roles-delete',
            template: '<roles-delete></roles-delete>'
          })
          .state(
            'roles-update', {
              url: '/roles-update',
              template: '<roles-update></roles-update>'
            })
            .state(
              'roles-view', {
                url: '/roles-view',
                template: '<roles-view></roles-view>'
              });
  }

})();
