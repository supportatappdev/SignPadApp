
	'use strict';
	var app = angular.module('SignPadDemo');

	app.controller('IndexCtrl', ['$rootScope','$scope', '$location', 'DropDownFactory','RESTService',  'Cache',  function ($rootScope,$scope, $location,DropDownFactory,RESTService,  Cache) {
	    $rootScope.selection = 'MainPage';
	    $rootScope.gohome = function() {
	         $rootScope.selection = 'MainPage';
		        $location.path('/');
	    };
	}]);
	  
	   