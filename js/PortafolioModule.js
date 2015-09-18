var app = angular.module("portafolioModule",['ui.router','portafolioModule.controller'])
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
  })
  .state('Blog',{
    url:'/Blog',
    templateUrl:'templates/Blog.html',
    controller:'PostController'
  })
  .state('singlePost',{
    url:'/post/:id',
    templateUrl:'templates/singlepost.html',
    controller:'SinglePostController'
  });
  $urlRouterProvider.otherwise('/About');
});

