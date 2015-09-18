angular.module("portafolioModule.controller",[])

.controller('PostController',['$scope','$http',function($scope,$http){
	$http.get('data/posts.json').success(function(data){
		$scope.posts= data;
	});
}])
.controller('SinglePostController',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
	$http.get('data/posts.json').success(function(data){
		$scope.post= data[$stateParams.id];
	});
}])