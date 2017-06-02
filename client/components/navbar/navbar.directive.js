(function(){
	'use strict';
	angular.module('startUpApp')
	.directive('navbar',navbar)

	function navbar(){
		return {
			restrict:'EA',
			templateUrl:'components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs:'vm'
		}
	}
})();
