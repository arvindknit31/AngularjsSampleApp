var sApp = angular.module("sampleApp",['ngRoute']);

sApp.config(function($routeProvider){
	$routeProvider
	.when('/',
		{
			controller: 'mainController',
			templateUrl: 'view/view1.html'
		})
	.when('/view2',
		{
			controller: 'mainController',
			templateUrl: 'view/view2.html'
		})
	.when('/view3',
		{
			controller: 'mainController',
			templateUrl: 'view/view3.html'
		})
	.otherwise({redirectTo:'/'});	

});

sApp.controller('mainController', function($scope){
	$scope.signUp = function(){
		console.log($scope.fname);
		console.log($scope.datetime);		
	};
});

/* Directives Start */

sApp.directive('datepicker', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(element).datetimepicker(); 
            $('html').on('click',$(element),function(){
            	scope.datetime = $(element).val();
            });
        }
    };
});