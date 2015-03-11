var sApp = angular.module("sampleApp",[]);

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

});
