/**
 * @author Filipe Gomes
 */
app.directive('mascaraData', function ($filter) {
	return {
		restrict : 'A',
		require : 'ngModel',
		link : function(scope, element, attrs, ctrl) {

			var _formatarData = function(data) {
				data = data.replace(regexSomenteNumero, '');
				if (data.length > 2) {
					data = data.substring(0, 2) + '/' + data.substring(2);
				}
				if (data.length > 5) {
					data = data.substring(0, 5) + '/' + data.substring(5, 9);
				}
				return data;
			};

			element.bind('keyup', function() {
								ctrl.$setViewValue(_formatarData(ctrl.$viewValue));
								ctrl.$render();
							});

			ctrl.$parsers.push(function (value) {
				if (value.length === 10) {
					var dataArray = value.split('/');
					var dia = dataArray[0];
					var mes = dataArray[1];
					var ano = dataArray[2];
					return new Date(ano, mes-1, dia);
				}
			});
			
			ctrl.$formatters.push(function (value) {
				return $filter('date')(value, 'dd/MM/yyyy');
			});
		}
	};
});