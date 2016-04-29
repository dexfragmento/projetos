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
}]);