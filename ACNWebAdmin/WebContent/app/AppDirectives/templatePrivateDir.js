/**
 * @author Filipe Gomes
 */
app.directive('templatePrivateDir', function(){
	return {
		priority: 1,
		controllerAs: 'vm',
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'app/AppViews/templatePrivate.html',
		transclude: true		
	};
});