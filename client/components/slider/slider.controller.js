'use strict';

(function(){

class SliderComponent {
  constructor() {

  }


$onInit(){


}
}
SliderComponent.$inject=['AuthService'];
angular.module('startUpApp')
  .component('slider', {
    templateUrl: 'components/slider/slider.html',
    controller: SliderComponent,
    controllerAs: 'vm'
  });

})();
