'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('administration', {
        url: '/administration',
        template: '<administration></administration>'
      });
  });
