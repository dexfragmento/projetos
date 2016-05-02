/**
 * @author Filipe Gomes
 */
app.directive('mascaraCei', function () {
	return {
		restrict : 'A',
		require : 'ngModel',
		link : function(scope, element, attrs, ctrl) {

			var _getCei = function(str) {								
				return str.replace(regexSomenteNumero, '');
			};

			var _formatarCei = function(int) {
				var tmp = int+'';
		        
		        if(tmp.length > 2) {
		        	tmp = tmp.substring(0, 2) + "." + tmp.substring(2);
		        }
		        
		        if(tmp.length > 6) {
		        	tmp = tmp.substring(0, 6) + "." + tmp.substring(6);
		        }
		        
		        if(tmp.length > 12) {
		        	tmp = tmp.substring(0, 12) + "/" + tmp.substring(12, 14);
		        }
		        
		        return tmp;
			};

			element.bind('keyup', function() {
				var int = _getCei(ctrl.$viewValue);
				ctrl.$setViewValue(_formatarCei(int));
				ctrl.$render();
			});
			
			/**
			 * Configurar valor ngModel
			 */
			ctrl.$parsers.push(function (value) {
				if (value.length == 15) {
					value = value.replace(/\./g , '');
					value = value.replace(/\//g , '');
					return String(value);
				}
			});
			
			/**
			 * Configurar valor Input
			 */
			ctrl.$formatters.push(function (value) {
				if(value !== undefined) {
					return $filter('cei')(value);
				}
			});
		}
	}
});