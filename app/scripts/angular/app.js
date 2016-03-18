/*
* @Author: nyb
* @Date:   2016-03-16 16:40:37
* @Last Modified by:   nyb
* @Last Modified time: 2016-03-18 13:58:58
*/

'use strict';
var app=angular.module('myApp',['ngRoute']);
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	$routeProvider
	.when('/',{templateUrl:'/views/tpl/welcome.html',controller:WelcomeCtrl})
	.otherwise({redirectTo:'/'});
	$locationProvider.html5Mode(true);
}]);

function WelcomeCtrl ($scope) {
	$scope.username = 'Nyb';
	 // body...  
}
