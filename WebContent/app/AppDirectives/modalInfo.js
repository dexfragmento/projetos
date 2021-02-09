/**
 * @author Filipe Gomes
 */
app.directive('modalInfo', function () {
	return {
		restrict: 'EA',
		templateUrl: 'app/AppViews/modalInfo.html',
		scope: {
			id: '=',
			tituloModal: '=titulo',
			infoArray: '=array'
		}
	};
});