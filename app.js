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
.controller("mainController", ["$scope", "$resource", "countryService", function ($scope, $resource, countryService) {

	$scope.$watch("country", function () {
		countryService.country = $scope.country;
	});
	$scope.$watch("year", function () {
		countryService.year = $scope.year;
	});
	$scope.submit = function() {
		$location.path("/population");
	};
}])

.controller("populationController", ["$scope", "$location", "countryService", function ($scope, $resource, countryService) {
	$scope.country = countryService.country;
	
	
}]);