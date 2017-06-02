'use strict';

(function(){

class SliderComponent {
  constructor() {

  }


$onInit(){


}

carousel_left() {


		if (CurrentSlide > 0) {

    		Direction = 0;
				$("#slideshow_carousel").carousel( "prev" );
		}
	}


  carousel_right() {


		if ((CurrentSlide  + 1) < TotalSlides) {

  		Direction = 1;
			$("#slideshow_carousel").carousel( "next" );
		} else {
			progressClick(0);
		}

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
