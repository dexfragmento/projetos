/**
 * @author Filipe Gomes
 */
app.directive('mascaraMoeda', function ($filter) {
	return {
		restrict : 'A',
		require : 'ngModel',
		link : function(scope, element, attrs, ctrl) {

			var _getMoeda = function(str) {								
				return str.replace(regexSomenteNumero, '');
			};

			var _formatarMoeda = function(int) {
				var tmp = int+'';
		        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
		        if( tmp.length == 3 ) {
		        	tmp = "0" + tmp.substring(0, 3);
		        } else if( tmp.length == 5 ) {
		        	if(tmp.charAt(0) == 0) {
		        		tmp = "" + tmp.substring(1, tmp.length);
		        	}
		        }
		        
		        if( tmp.length > 6 )
		                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
		        
		        if( tmp.length > 9)
		            tmp = tmp.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,".$1.$2,$3");

		        return tmp;
			};

			element.bind('keyup', function() {
				var int = _getMoeda(ctrl.$viewValue);
				ctrl.$setViewValue(_formatarMoeda(int));
				ctrl.$render();
			});
			
			/**
			 * Configurar valor ngModel
			 */
			ctrl.$parsers.push(function (value) {
				value = value.replace(/\,/g , '');
				value = value.replace(/\./g , '');				
				var tam = value.length;
				if(tam >= 2) {
					value = value.substring(0, tam-2) + '.' + value.substring(tam-2, tam);
				}
				return value;
			});
			
			/**
			 * Configurar valor Input
			 */
			ctrl.$formatters.push(function (value) {
				if(value !== undefined && value !== null) {
					value = String(value);
					if(value.indexOf('.') == -1) {
						value += ".00";
					}
					return _formatarMoeda(_getMoeda(value));
				}
			});
		}
	};
});