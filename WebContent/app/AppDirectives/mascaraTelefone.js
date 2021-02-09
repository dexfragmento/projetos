/**
 * @author Filipe Gomes
 */
app.directive('mascaraTelefone', function () {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, element, attrs, ctrl) {
			var _getTelefone = function(str) {								
				return str.replace(regexSomenteNumero, '');
			};

			var _formatarTelefone = function(int) {
				var tmp = int+'';
		        
		        if(tmp.length > 0) {
		        	tmp = tmp.substring(0, 0) + "(" + tmp.substring(0);
		        }
		        
		        if(tmp.length > 3) {
		        	tmp = tmp.substring(0, 3) + ") " + tmp.substring(3);
		        }
		        
		        if(tmp.length > 5) {
		        	tmp = tmp.substring(0, 14);
		        }
		        
		        return tmp;
			};

			element.bind('keyup', function() {
				var int = _getTelefone(ctrl.$viewValue);
				ctrl.$setViewValue(_formatarTelefone(int));
				ctrl.$render();
			});
			
			/**
			 * Configurar valor ngModel
			 */
			ctrl.$parsers.push(function (value) {
				if (value.length == 13) {
					value = value.replace(/\(/g , '');
					value = value.replace(/\)/g , '');
					value = value.replace(/ /g , '');
					return value;
				}								
			});
			
			/**
			 * Configurar valor Input
			 */
			ctrl.$formatters.push(function (value) {
				if(value !== undefined) {
					return _formatarTelefone(_getTelefone(value));
				}
			});
		}
	};
});