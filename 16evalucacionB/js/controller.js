var world = angular.module("world",[])
world.controller("blizzard",function($rootScope,$scope,$http){
	$scope.blizzard = [];
	for (var i = 0; i <= 100; i++) {
		$http({
		method: "GET",
		url:  "href": "https://us.api.blizzard.com/data/wow/token/?namespace=dynamic-us""+i"
	}).then(function callbackSuccess(y){
		$scope.blizzard.push(y);
	})
}
})