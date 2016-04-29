/**
 * @author Filipe Gomes
 */
app.filter('cpf', function () {
	return function (input) {
		
		if(input !== undefined) {
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
			
			input = _formatarCpf(_getCpf(String(input)));
		}
		
		return input;
	};
});