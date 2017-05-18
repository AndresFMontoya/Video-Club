'use strict';
class SliderController {
  constructor($scope) {

    $scope.slides = [
        'assets/slider-images/images/4.jpg',
        'assets/slider-images/images/9.jpg'

      ];

  }


}
SliderController.$inject=["$scope"];
angular.module('startUpApp')
  .controller('SliderController', SliderController);
