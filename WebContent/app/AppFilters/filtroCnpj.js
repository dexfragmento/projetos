/**
 * @author Filipe Gomes
 */
app.filter('cnpj', function () {
	return function (input) {
		
		if(input !== undefined && input != null) {
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
			
			input = _formatarCnpj(_getCnpj(input));
		}
		
		return input;
	};
});