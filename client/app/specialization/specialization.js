(function() {
  'use strict';
  angular.module('startUpApp')
  .config(config);

  config.inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
    .state(
      'specialization-create', {
        url: '/specialization-create',
        template: '<specialization-create></specialization-create>'
      })
      .state(
        'specialization-delete', {
          url: '/specialization-delete',
          template: '<specialization-delete></specialization-delete>'
        })
        .state(
          'specialization-list', {
            url: '/specialization-list',
            template: '<specialization-list></specialization-list>'
          })
          .state(
            'specialization-update', {
              url: '/specialization-update',
              template: '<specialization-update></specialization-update>'
            })
            .state(
              'specialization-view', {
                url: '/specialization-view',
                template: '<specialization-view></specialization-view>'
              });
  }
})();
