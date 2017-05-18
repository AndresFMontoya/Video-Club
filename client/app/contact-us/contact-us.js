(function() {
  'use strict';

  angular.module('startUpApp')
  .config(config);

  config.inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state(
      'contact-us', {
        url: '/contact-us',
        template: '<contact-us></contact-us>'
      });
  }

})();
