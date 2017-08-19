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
          authenticate: ["ADMIN"],
          template: '<departments-create></departments-create>'
        })
      .state(
        'departments-list', {
          url: '/departments-list',
          authenticate: ["ADMIN"],
          template: '<departments-list></departments-list>'
        })
      .state(
        'departments-update', {
          url: '/departments-update',
          authenticate: ["ADMIN"],
          template: '<departments-update></departments-update>'
        })
      .state(
        'departments-view', {
          url: '/departments-view',
          authenticate: ["ADMIN"],
          template: '<departments-view></departments-view>'
        });
  }

})();
