(function() {
  'use strict';

  angular.module('startUpApp')
  .config(config);

  config.inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state(
      'about-us', {
        url: '/about-us',
        template: '<about-us></about-us>'
      });
  }

})();
