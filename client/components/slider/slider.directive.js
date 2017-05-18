'use strict';

angular.module('startUpApp')
  .directive('slider', () => ({
    templateUrl: 'components/slider/slider.html',
    restrict: 'E',
    controller: 'SliderController',
    controllerAs: 'slide'
  }));
