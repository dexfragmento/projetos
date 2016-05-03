/**
 * @author Filipe Gomes
 */
app.directive('templatePrivateDir', ['$base64', '$location', function($base64, $location){
	return {
		priority: 1,
		controllerAs: 'vm',
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'app/AppViews/templatePrivate.html',
		transclude: true,
		controller: function ($scope) {
			$scope.openView = function (param) {
				$location.path('/' + $base64.encode(param));
			};
		}
	};
}]);