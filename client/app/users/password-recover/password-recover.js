'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('password-recover', {
        url: '/password-recover',
        template: '<password-recover></password-recover>'
      });
  });
