var app = angular.module("portafolioModule",['ngRoute','ngAnimate']).config(['$locationProvider', '$routeProvider','$provide',
function($locationProvider,$routeProvider,$provide){
  $provide.decorator('$sniffer', function($delegate) {
  $delegate.history = false;
  return $delegate;
});
  $routeProvider
			.when('/About', {
				templateUrl : '/templates/About.html',
				controller : 'mainController'
			})
			.when('/Project', {
				templateUrl : '/templates/Project.html',
				controller : 'mainController'
			})
      .when('/Resources', {
        templateUrl : '/templates/Resources.html',
        controller : 'mainController'
      }).
      otherwise({
        redirectTo: '/templates/About.html'
      });
  $locationProvider
  .html5Mode(true)
  .hashPrefix('!');
}]);

app.controller("mainController", function($scope){

});
