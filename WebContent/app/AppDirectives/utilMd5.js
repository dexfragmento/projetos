/**
 * @author Filipe Gomes
 */
app.directive('utilMd5', ['md5', function (md5) {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, element, attrs, ctrl) {
			var _criptografarSenha = function (param) {
				return md5.createHash(param || '');
			};
			
			element.bind('keyup', function () {
				ctrl.$setViewValue(_criptografarSenha(ctrl.$viewValue));
				ctrl.$render();
			});
		}
	}
}]);