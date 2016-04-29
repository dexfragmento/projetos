/**
 * @author Filipe Gomes
 */
app.directive('mascaraCpf', function () {
	return {
		restrict : 'A',
		require : 'ngModel',
		link : function(scope, element, attrs, ctrl) {

			var _getCpf = function(str) {								
				return str.replace(regexSomenteNumero, '');
			};

			var _formatarCpf = function(int) {
				var tmp = int+'';
		        
		        if(tmp.length > 3) {
		        	tmp = tmp.substring(0, 3) + "." + tmp.substring(3);
		        }
		        
		        if(tmp.length > 7) {
		        	tmp = tmp.substring(0, 7) + "." + tmp.substring(7);
		        }
		        
		        if(tmp.length > 11) {
		        	tmp = tmp.substring(0, 11) + "-" + tmp.substring(11, 13);
		        }
		        
		        return tmp;
			};

			element.bind('keyup', function() {
				var int = _getCpf(ctrl.$viewValue);
				ctrl.$setViewValue(_formatarCpf(int));
				ctrl.$render();
			});
			
			/**
			 * Configurar valor ngModel
			 */
			ctrl.$parsers.push(function (value) {
				if (value.length == 14) {
					value = value.replace(/\./g , '');
					value = value.replace(/-/g , '');
					return value;
				}								
			});
			
			/**
			 * Configurar valor Input
			 */
			ctrl.$formatters.push(function (value) {
				if(value !== undefined) {
					return _formatarCpf(_getCpf(value));
				}
			});
		}
	}
});