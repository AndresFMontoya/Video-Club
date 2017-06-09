'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('not-found', {
        url: '/not-found',
        template: '<not-found></not-found>'
      });
  });
