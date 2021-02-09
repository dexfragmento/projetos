/**
 * @author Filipe Gomes
 */
app.directive('modalConfirmacao', function () {
	return {
		restrict: 'EA',
		templateUrl: 'app/AppViews/modalConfirmacao.html',
		scope: {
			id: '=',
			tituloModal: '=titulo',
			conteudoTitulo: '=',
			conteudoCorpo: '=',
			funcCallback: '&'
		}
	};
});