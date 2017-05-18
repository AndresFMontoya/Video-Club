(function() {
  'use strict';

  angular.module('startUpApp')
  .config(config);

  config.inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state(
      'offers-page', {
        url: '/offers-page',
        template: '<offers-page></offers-page>'
      });
  }

})();
