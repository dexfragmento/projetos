/**
* @author Filipe Gomes
**/
var rotas = angular.module('rotas', ['ngRoute', 'base64']);

rotas.config(['$routeProvider', '$base64',
	function($routeProvider, $base64) {
	
		function _base64encode(param) {
			return '/' + $base64.encode(param);
		};
	
		$routeProvider
			.when('/', {
				redirectTo: _base64encode('dashboard')
			})
			.when(_base64encode('dashboard'), {
				templateUrl: 'app/dashboard/views/dashboardView.html',
				controller: 'DashboardController'
			})
			.when(_base64encode('cadastroFuncionario'), {
				templateUrl: 'app/funcionario/views/cadastroFuncionarioView.html',
				controller: 'CadastroFuncionarioController'
			})
			.when(_base64encode('cadastroFinanceiro'), {
				templateUrl: 'app/financeiro/views/cadastroFinanceiroView.html',
				controller: 'CadastroFinanceiroController'
			})
			.when(_base64encode('cadastroLocacao'), {
				templateUrl: 'app/locacao/views/cadastroLocacaoView.html',
				controller: 'CadastroLocacaoController'
			})
			.when(_base64encode('recursoHumano'), {
				templateUrl: 'app/recursohumano/views/recursoHumanoView.html',
				controller: 'RecursoHumanoController'
			})
			.when(_base64encode('cadastroCargo'), {
				templateUrl: 'app/cargo/views/cadastroCargoView.html',
				controller: 'CadastroCargoController'
			})
			.when(_base64encode('consultaCargo'), {
				templateUrl: 'app/cargo/views/consultaCargoView.html',
				controller: 'ConsultaCargoController'
			})
			.when(_base64encode('cadastroEmpresa'), {
				templateUrl: 'app/empresa/views/cadastroEmpresaView.html',
				controller: 'CadastroEmpresaController'
			})
			.when(_base64encode('administracaoUsuario'), {
				templateUrl: 'app/usuario/views/administracaoUsuarioView.html',
				controller: 'AdministracaoUsuarioController'
			})
			.when('/404', {
				templateUrl: 'app/AppViews/404.html'
			})
			.otherwise({
				redirectTo: '/404'
			});
	}
])