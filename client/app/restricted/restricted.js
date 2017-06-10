'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('restricted', {
        url: '/restricted',
        template: '<restricted></restricted>'
      });
  });
