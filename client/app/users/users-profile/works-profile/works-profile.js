'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('works-profile', {
        url: '/works-profile',
        template: '<works-profile></works-profile>'
      });
  });
