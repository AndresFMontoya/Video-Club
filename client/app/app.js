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
    'toastr',
    'ngImgCrop',
    'ngFileSaver',
    'LocalStorageModule'
  ])
  .constant("API","http://localhost:8080/adecuahogar-backend")
  .config(function($urlRouterProvider, $locationProvider,$authProvider,API,localStorageServiceProvider) {
    $urlRouterProvider.otherwise('not-found');
    //Config satellizer
    $authProvider.loginUrl = API +'/api/auth/login';
    $authProvider.tokenName='token';
    $authProvider.tokenPrefix='startUpApp';
    $locationProvider.html5Mode(true);

    localStorageServiceProvider
        .setPrefix('startUpApp');
  })
//   .run(function($state,$rootScope, $auth,routeManager) {
//      $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
//         if (($auth.getPayload().roles.indexOf("TRAB") !== -1 || $auth.getPayload().roles.indexOf("FERR") !== -1) && (routeManager.loggedTrabFerr.indexOf(toState.name)!== -1)) {
//           e.preventDefault();
//           $state.go('main');
//
//         } else if($auth.getPayload().roles.indexOf("TRAB")!== -1 && toState.name === "ironmongery-profile") {
//           e.preventDefault();
//           $state.go('works-profile');
//         } else if($auth.getPayload().roles.indexOf("FERR")!== -1 && toState.name === "works-profile") {
//           e.preventDefault();
//           $state.go('ironmongery-profile');
//         }
//       }else{
//
//         if (!$auth.isAuthenticated() && routeManager.unlogged.indexOf(toState.name)!== -1) {
//
//           e.preventDefault();
//           $state.go('restricted');
//         }
//       }
//      });
// });
