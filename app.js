//MODULE
var populationApp = angular.module("populationApp", ["ngRoute", "ngResource"])

 //ROUTES
.config(function($routeProvider) {
	$routeProvider

	.when("/", {
		templateUrl: "main.html",
		controller: "mainController"
	})
})
	
//CONTROLLER
.controller("mainController", ["$scope", function ($scope) {
	
}]);

	