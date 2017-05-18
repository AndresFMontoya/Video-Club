(function() {
  'use strict';

  angular.module('startUpApp')
    .config(config);

  config.inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state(
        'departments-create', {
          url: '/departments-create',
          template: '<departments-create></departments-create>'
        })
      .state(
        'departments-list', {
          url: '/departments-list',
          template: '<departments-list></departments-list>'
        })
      .state(
        'departments-update', {
          url: '/departments-update',
          template: '<departments-update></departments-update>'
        })
      .state(
        'departments-view', {
          url: '/departments-view',
          template: '<departments-view></departments-view>'
        });
  }

})();
