(function() {
  'use strict';

  angular.module('startUpApp')
  .config(config);

  config.inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state('environment', {
      url: '/environment',
      template: '<environment></environment>'
    });
  }

})();
