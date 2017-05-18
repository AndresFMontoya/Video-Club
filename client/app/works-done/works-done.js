(function() {
  'use strict';

  angular.module('startUpApp')
  .config(config);

  config.inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
    .state('works-done-create', {
      url: '/works-done-create',
      template: '<works-done-create></works-done-create>'
    })
    .state('works-done-delete', {
      url: '/works-done-delete',
      template: '<works-done-delete></works-done-delete>'
    })
    .state('works-done-list', {
      url: '/works-done-list',
      template: '<works-done-list></works-done-list>'
    })
    .state('works-done-update', {
      url: '/works-done-update',
      template: '<works-done-update></works-done-update>'
    })
    .state('works-done-view', {
      url: '/works-done-view',
      template: '<works-done-view></works-done-view>'
    });
  }

})();
