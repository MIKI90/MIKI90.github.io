var app = angular.module("portafolioModule",['portafolioModule','ngRoute']).config(['$locationProvider', '$routeProvider',
function($locationProvider,$routeProvider){
  $routeProvider
			.when('/about', {
				templateUrl : '/templates/About.html',
				controller : 'mainController'
			})
			.when('/contact', {
				templateUrl : '/templates/Project.html',
				controller : 'mainController'
			});
  $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode(true);
}]);

app.controller("mainController", function($scope){

});
