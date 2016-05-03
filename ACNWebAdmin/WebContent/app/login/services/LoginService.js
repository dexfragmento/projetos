/**
 * @author Filipe Gomes
 */
app.factory('LoginService', LoginService);

LoginService.$inject = ['$http', '$rootScope', '$cookieStore'];

function LoginService ($http, $rootScope, $cookieStore) {
	var service = {};
	
	function setCredenciais (nome, login, senha) {
		$rootScope.globals = {
				usuarioLogado: {
					nome: nome,
                    login: login,
                    senha: senha
                }
            };
		
		$cookieStore.put('globals', $rootScope.globals);
	};
	
	function limparCredenciais () {
		$rootScope.globals = {};
        $cookieStore.remove('globals');
	};
	
	service.setCredenciais = setCredenciais;
	service.limparCredenciais = limparCredenciais;
	
	return service;
};