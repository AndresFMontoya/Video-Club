(function() {
  'use strict';

  angular.module('startUpApp')
    .config(config);

  config.inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state(
        'images-create', {
          url: '/images-create',
          template: '<images-create></images-create>'
        })
      .state(
        'images-delete', {
          url: '/images-delete',
          template: '<images-delete></images-delete>'
        })
      .state(
        'images-list', {
          url: '/images-list',
          template: '<images-list></images-list>'
        })
      .state(
        'images-update', {
          url: '/images-update',
          template: '<images-update></images-update>'
        });
  }

})();
