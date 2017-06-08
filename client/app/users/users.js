(function(){
	'use strict';

	angular.module('startUpApp')
	.config(config);

	config.inject = ['$stateProvider'];

	function config($stateProvider){
		$stateProvider
		.state('users-create',{
			url:'/users-create',
			template:'<users-create></users-create>'
		})
    .state('users-list',{
			url:'/users-list',
			template:'<users-list></users-list>'
		})
    .state('users-update',{
			url:'/users-update/:id',
			template:'<users-update></users-update>'
		})
    .state('users-remove',{
      url:'/users-remove',
      template:'<users-remove></users-remove>'
    })
    .state('users-view',{
			url:'/users-view/:id',
			template:'<users-view></users-view>'
		})
		.state(
      'users-delete', {
        url: '/users-delete',
        template: '<users-delete></users-delete>'
      });


	}


})();
