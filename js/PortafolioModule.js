var app = angular.module("portafolioModule",['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
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
  $urlRouterProvider.otherwise('/About');
});
app.controller("mainController", function($scope){

});
