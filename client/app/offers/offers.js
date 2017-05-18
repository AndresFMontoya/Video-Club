(function() {
  'use strict';

  angular.module('startUpApp')
    .config(config);

  config.inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state(
        'offers-create', {
          url: '/offers-create',
          template: '<offers-create></offers-create>'
        })
      .state(
        'offers-delete', {
          url: '/offers-delete',
          template: '<offers-delete></offers-delete>'
        })
      .state(
        'offers-list', {
          url: '/offers-list',
          template: '<offers-list></offers-list>'
        })
      .state(
        'offers-update', {
          url: '/offers-update',
          template: '<offers-update></offers-update>'
        })
      .state(
        'offers-view', {
          url: '/offers-view',
          template: '<offers-view></offers-view>'
        });
  }

})();
