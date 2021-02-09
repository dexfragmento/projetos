/**
* @author Filipe Gomes
**/

var app = angular.module('app', ['rotas', 'angular-md5', 'base64', 'ngCookies']);

app.run(run);

run.$inject = ['$rootScope', '$location', '$cookieStore'];
function run ($rootScope, $location, $cookieStore) {
	$rootScope.$on('$locationChangeStart', function (event, next, current) {
		$rootScope.globals = $cookieStore.get('globals') || {};
			
		var logado = $rootScope.globals.usuarioLogado;
		
		if (!logado) {
			$location.path('/login');
		}
	});
};