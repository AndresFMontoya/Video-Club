'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ironmongery-profile', {
        url: '/ironmongery-profile',
        template: '<ironmongery-profile></ironmongery-profile>'
      });
  });
