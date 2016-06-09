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
.controller("mainController", ["$scope", "$resource", "$location", "countryService", function ($scope, $resource, $location, countryService) {

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

.controller("populationController", ["$scope","$resource", "$location", "countryService", function ($scope, $resource, $location, countryService) {
	$scope.country = countryService.country;
	$scope.year = countryService.year;

	$scope.populationAPI = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,AGE,POP&FIPS&SEX=0&key=dc40f5cc7c6380307039288db3f8771fe139956c');

	$scope.populationResponse = $scope.populationAPI.query({NAME:$scope.country, time:$scope.year});
	console.log($scope.populationResponse);
}]);