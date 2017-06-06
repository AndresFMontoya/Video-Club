(function() {
  'use strict';

  class NavbarComponent {
    constructor($auth, AuthService, usersService) {

      this.$auth = $auth;
      this.AuthService = AuthService;
      this.usersService = usersService;
      this.userId;
      this.contador = 1;

    }

    $onInit() {

      $('.fa-bars').click(function() {
        $('.MainMenu').slideToggle();

        /*if(this.contador == 1){
          this.contador = 0;
          $('.MainMenu').animate({
            top: '248px'
          });
        }else{
          this.contador = 1;
          $('.MainMenu').animate({
            top: '-60%'
          });
        }*/
      });
      $('.MainMenu-link, .ButtonContainer2, .ButtonContainer1').click(function() {
        if (this.contador == 0) {
          this.contador = 1;
          $('.MainMenu').animate({
            top: '-200%'
          });
        }
      });


      if (this.AuthService.isAuthenticated()) {

        this.userId = this.$auth.getPayload().sub;

        this.usersService.get({
            id: this.userId
          }).$promise
          .then(response => {
            this.user = response;
            console.log("usuario", this.user);
          }).catch(err => {

            console.log("error", err);
          });
      }
    }


    logout() {

      this.AuthService.logout();

    }
  }
NavbarComponent.$inject=['$auth','AuthService','usersService'];
  angular.module('startUpApp')
    .component('navbar', {
      templateUrl: "components/navbar/navbar.html",
      controller: NavbarComponent,
      controllerAs: 'vm'
    })

})();
