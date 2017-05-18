'use strict';
$(document).ready(main);
var contador = 1;

function main () {
    $('.fa-bars').click(function(){
      //$('.MainMenu').toggle();

      if(contador == 1){
        contador = 0;
        $('.MainMenu').animate({
          top: '248px'
        });
      }else{
        contador = 1;
        $('.MainMenu').animate({
          top: '-60%'
        });
      }
    });
    $('.MainMenu-link, .ButtonContainer2, .ButtonContainer1').click(function(){
      if(contador == 0){
        contador = 1;
        $('.MainMenu').animate({
          top: '-200%'
        });
      }
    });

};
