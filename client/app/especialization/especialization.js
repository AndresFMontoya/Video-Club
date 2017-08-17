(function() {
  'use strict';
  angular.module('startUpApp')
  .config(config);

  config.inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
    .state(
      'especialization-create', {
        url: '/especialization-create',
        authenticate: ["ADMIN"],
        template: '<especialization-create></especialization-create>'
      })
      .state(
        'especialization-delete', {
          url: '/especialization-delete',
          authenticate: ["ADMIN"],
          template: '<especialization-delete></especialization-delete>'
        })
        .state(
          'especialization-list', {
            url: '/especialization-list',
            template: '<especialization-list></especialization-list>'
          })
          .state(
            'especialization-update', {
              url: '/especialization-update',
              authenticate: ["ADMIN"],
              template: '<especialization-update></especialization-update>'
            })
            .state(
              'especialization-view', {
                url: '/especialization-view',
                authenticate: ["ADMIN"],
                template: '<especialization-view></especialization-view>'
              });
  }
})();
