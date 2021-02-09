/**
 * @author Filipe Gomes
 */
app.directive('mensagem', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'app/AppViews/mensagem.html',
		scope: {
			type: '=',
			title: '=',
			msg: '='
		}
	}
});