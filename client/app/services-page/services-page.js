(function() {
  'use strict';
  angular.module('startUpApp')
  .config(config);

  config.inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state(
      'services-page', {
        url: '/services-page',
        template: '<services-page></services-page>'
      })
  }
})();
