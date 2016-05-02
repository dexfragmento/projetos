/**
 * @author Filipe Gomes
 */
app.filter('cei', function () {
	return function (input) {
		
		if(input !== undefined && input != null) {
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
			
			input = _formatarCei(_getCei(input));
		}
		
		return input;
	};
});