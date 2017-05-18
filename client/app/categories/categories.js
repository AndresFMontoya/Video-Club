(function() {
  'use strict';

  angular.module('startUpApp').config(config);

  config.inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state(
        'categories-create', {
          url: '/categories-create',
          template: '<categories-create></categories-create>'
        })
      .state(
        'categories-list', {
          url: '/categories-list',
          template: '<categories-list></categories-list>'
        })
      .state(
        'categories-update', {
          url: '/categories-update',
          template: '<categories-update></categories-update>'
        })
      .state(
        'categories-view', {
          url: '/categories-view',
          template: '<categories-view></categories-view>'
        });
  }

})();
