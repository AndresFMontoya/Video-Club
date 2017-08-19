'use strict';

(function(){

class RestrictedComponent {
  constructor() {

  }

  $onInit(){
      var fHeight = $(".Footer").height();
      var hHeight = $(".Header").height();
      var tHeight = fHeight+hHeight;
      calHeight(tHeight);
      console.log("j",tHeight);
      // $(window).resize(function(){
      //         var fHeight = $(".Footer").height();
      //         var hHeight = $(".Header").height();
      //         var tHeight = fHeight+hHeight;
      //         calHeight(tHeight);
      //
      //
      //     });



    function calHeight(tHeight) {
      $(".Restricted-container").css("height", "calc(100vh - "+ tHeight +"px)");
      console.log(tHeight);
    }
  }
  }


angular.module('startUpApp')
  .component('restricted', {
    templateUrl: 'app/restricted/restricted.html',
    controller: RestrictedComponent,
    controllerAs: 'restrictedCtrl'
  });

})();
