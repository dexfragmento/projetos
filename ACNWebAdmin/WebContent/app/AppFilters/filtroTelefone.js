/**
 * @author Filipe Gomes
 */
app.filter('telefone', function () {
	return function (input) {
		if(input !== undefined && input != null){
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
			
			input = _formatarTelefone(_getTelefone(String(input)));
		}
		return input;
	};
});