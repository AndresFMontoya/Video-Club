'use strict';

angular.module('startUpApp', [
    'startUpApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'satellizer',
    'ngMaterial',
    'ngMessages',
  ])
  .constant("API","http://localhost:8080/BackendExpertos")
  .config(function($urlRouterProvider, $locationProvider,$authProvider,API) {
    $urlRouterProvider.otherwise('/');
    //Config satellizer
    $authProvider.loginUrl = API +'/api/auth/login';
    $authProvider.tokenName='token';
    $authProvider.tokenPrefix='startUpApp';
    $locationProvider.html5Mode(true);
  }).run(function($state,$rootScope, $auth) {
     $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {

      if ($auth.isAuthenticated()) {
        if (($auth.getPayload().roles.indexOf("TRAB") !== -1 || $auth.getPayload().roles.indexOf("FERR") !== -1) && (toState.name === "users-update" || toState.name === "users-create")) {
          e.preventDefault();
          $state.go('main');
        } else if($auth.getPayload().roles.indexOf("TRAB")!== -1 && toState.name === "ironmongery-profile") {
          e.preventDefault();
          $state.go('works-profile');
        } else if($auth.getPayload().roles.indexOf("FERR")!== -1 && toState.name === "works-profile") {
          e.preventDefault();
          $state.go('ironmongery-profile');
        }
      }else{
        if (toState.name === "users-update") {
          e.preventDefault();
          $state.go('main');
        } else if(toState.name === "ironmongery-profile") {
          e.preventDefault();
          $state.go('main');
        } else if(toState.name === "works-profile") {
          e.preventDefault();
          $state.go('main');
        }
      }
     });
});
