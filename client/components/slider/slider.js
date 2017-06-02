'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('slider', {
        url: '/slider',
        template: '<slider></slider>'
      });
  });
