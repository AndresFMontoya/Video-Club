(function(){
	'use strict';

	angular.module('startUpApp')
	.config(config);

	config.inject = ['$stateProvider'];

	function config($stateProvider){
		$stateProvider
		.state('document-types-create',{
			url:'/document-types-create',
			template:'<document-types-create></document-types-create>'
		})
    .state('document-types-list',{
			url:'/document-types-list',
			template:'<document-types-list></document-types-list>'
		})
    .state('document-types-update',{
			url:'/document-types-update',
			template:'<document-types-update></document-types-update>'
		})
    .state('document-types-remove',{
      url:'/document-types-remove',
      template:'<document-types-remove></document-types-remove>'
    })
    .state('document-types-view',{
			url:'/document-types-view/:id',
			template:'<document-types-view></document-types-view>'
		})
		.state(
      'document-types-delete', {
        url: '/document-types-delete',
        template: '<document-types-delete></document-types-delete>'
      });


	}


})();
