/**
 * @author Filipe Gomes
 */
app.factory('LoginService', LoginService);

LoginService.$inject = ['$http', '$rootScope', '$cookieStore'];

function LoginService ($http, $rootScope, $cookieStore) {
	var service = {};
	
	function setCredenciais (nome, login, senha, perfil) {
		$rootScope.globals = {
				usuarioLogado: {
					nome: nome,
                    login: login,
                    senha: senha,
                    perfil: perfil
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