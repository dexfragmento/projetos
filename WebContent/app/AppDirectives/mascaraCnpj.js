/**
 * @author Filipe Gomes
 */
app.directive('mascaraCnpj', function () {
	return {
		restrict : 'A',
		require : 'ngModel',
		link : function(scope, element, attrs, ctrl) {

			var _getCnpj = function(str) {								
				return str.replace(regexSomenteNumero, '');
			};

			var _formatarCnpj = function(int) {
				var tmp = int+'';
		        
		        if(tmp.length > 2) {
		        	tmp = tmp.substring(0, 2) + "." + tmp.substring(2);
		        }
		        
		        if(tmp.length > 6) {
		        	tmp = tmp.substring(0, 6) + "." + tmp.substring(6);
		        }
		        
		        if(tmp.length > 10) {
		        	tmp = tmp.substring(0, 10) + "/" + tmp.substring(10);
		        }
		        
		        if(tmp.length > 15) {
		        	tmp = tmp.substring(0, 15) + "-" + tmp.substring(15, 17);
		        }
		        
		        return tmp;
			};

			element.bind('keyup', function() {
				var int = _getCnpj(ctrl.$viewValue);
				ctrl.$setViewValue(_formatarCnpj(int));
				ctrl.$render();
			});
			
			/**
			 * Configurar valor ngModel
			 */
			ctrl.$parsers.push(function (value) {
				if (value.length == 18) {
					value = value.replace(/\./g , '');
					value = value.replace(/-/g , '');
					value = value.replace(/\//g , '');
					return String(value);
				}
			});
			
			/**
			 * Configurar valor Input
			 */
			ctrl.$formatters.push(function (value) {
				if(value !== undefined) {
					return $filter('cnpj')(value);
				}
			});
		}
	}
});