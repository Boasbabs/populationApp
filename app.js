//MODULE
var populationApp = angular.module("populationApp", ["ngRoute", "ngResource"])

 //ROUTES
.config(function($routeProvider) {
	$routeProvider

	.when("/", {
		templateUrl: "main.html",
		controller: "mainController"
	})
	.when("/population", {
		templateUrl: "population.html",
		controller: "populationController"
	})
})
	
//SERVICE
.service("countryService", function() {
	this.country = "India";
	this.year = "2014";
})

//CONTROLLER
.controller("mainController", ["$scope", "$location", "countryService", function ($scope, $location, countryService) {
	$scope.country = "india";
	$scope.year = "2014";

	$scope.$watch("country", function () {
		countryService.city = $scope.country;
	});
	$scope.submit = function() {
		$location.path("/population");
	};
}])

.controller("populationController", ["$scope", "$location", "countryService", function ($scope, $location, countryService) {
	
	
}]);