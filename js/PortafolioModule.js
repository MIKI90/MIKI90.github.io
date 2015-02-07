var app = angular.module("portafolioModule",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home',{
    url:'/',
    templateUrl:''
  })
  .state('About',{
    url:'/About',
    templateUrl:'templates/About.html'
  })
  .state('Project',{
    url:'/Project',
    templateUrl:'templates/Project.html'
  })
  .state('Resources',{
    url:'/Resources',
    templateUrl:'templates/Resources.html'
  });
  $urlRouterProvider.otherwise('/');
});
/*.config(['$locationProvider', '$routeProvider','$provide',
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
}]);*/

app.controller("mainController", function($scope){

});
