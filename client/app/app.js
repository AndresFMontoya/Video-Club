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
  });
