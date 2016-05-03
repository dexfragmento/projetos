/**
 * @author Filipe Gomes
 */
app.directive('login', [function () {
	return {
		restrict: 'EA',
		priority: 1,
		terminal: true,
		templateUrl: 'app/login/views/login.html'
	}
}]);