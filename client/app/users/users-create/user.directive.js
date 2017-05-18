//This directive allows you to check if the user has successfully entered the password and the email
(function(){
	'use strict';
	angular.module('startUpApp')
	.directive('compareTo',compareTo)

	function compareTo(){

    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };

	}
})();
