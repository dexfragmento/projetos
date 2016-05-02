/**
* @author Filipe Gomes
**/

app.controller('AppController', ['$scope', function($scope){	
	$scope.$on('load', function () {
		$scope.loading = true;
	});

	$scope.$on('unload', function () {
		$scope.loading = false;
	});
	
	$scope.$on('login', function () {
		$scope.isLogin = false;
	});
	
	$scope.$on('logout', function () {
		$scope.isLogin = true;
	});
	
	$scope.logout = function () {
		$scope.isLogin = true;
	};
}]);