(function(){
	'use strict';

	angular.module('startUpApp')
	.config(config);

	config.inject = ['$stateProvider'];

	function config($stateProvider){
		$stateProvider
		.state('document-types-create',{
			url:'/document-types-create',
			authenticate: ["ADMIN"],
			template:'<document-types-create></document-types-create>'
		})
    .state('document-types-list',{
			url:'/document-types-list',
			authenticate: ["ADMIN"],
			template:'<document-types-list></document-types-list>'
		})
    .state('document-types-update',{
			url:'/document-types-update',
			authenticate: ["ADMIN"],
			template:'<document-types-update></document-types-update>'
		})
    .state('document-types-remove',{
      url:'/document-types-remove',
			authenticate: ["ADMIN"],
      template:'<document-types-remove></document-types-remove>'
    })
    .state('document-types-view',{
			url:'/document-types-view/:id',
			authenticate: ["ADMIN"],
			template:'<document-types-view></document-types-view>'
		})
		.state(
      'document-types-delete', {
        url: '/document-types-delete',
				authenticate: ["ADMIN"],
        template: '<document-types-delete></document-types-delete>'
      });


	}


})();
