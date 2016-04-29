/**
* @author Filipe Gomes
**/
var rotas = angular.module('rotas', ['ngRoute']);

rotas.config(['$routeProvider',
	function($routeProvider, $scope) {
		$routeProvider
			.when('/', {
				redirectTo: '/dashboard'
			})
			.when('/dashboard', {
				templateUrl: 'app/dashboard/views/dashboardView.html',
				controller: 'DashboardController'
			})
			.when('/cadastroFuncionario', {
				templateUrl: 'app/funcionario/views/cadastroFuncionarioView.html',
				controller: 'CadastroFuncionarioController'
			})
			.when('/cadastroFinanceiro', {
				templateUrl: 'app/financeiro/views/cadastroFinanceiroView.html',
				controller: 'CadastroFinanceiroController'
			})
			.when('/cadastroLocacao', {
				templateUrl: 'app/locacao/views/cadastroLocacaoView.html',
				controller: 'CadastroLocacaoController'
			})
			.when('/recursoHumano', {
				templateUrl: 'app/recursohumano/views/recursoHumanoView.html',
				controller: 'RecursoHumanoController'
			})
			.when('/cadastroCargo', {
				templateUrl: 'app/cargo/views/cadastroCargoView.html',
//				resolve: {
//					carregamentoCargos : function (AppService) {
//						return AppService.consultarTudo('/cargo');
//					}
//				},
				controller: 'CadastroCargoController'
			})
			.when('/consultaCargo', {
				templateUrl: 'app/cargo/views/consultaCargoView.html',
				controller: 'ConsultaCargoController'
			})
			.when('/cadastroEmpresa', {
				templateUrl: 'app/empresa/views/cadastroEmpresaView.html',
				controller: 'CadastroEmpresaController'
			})
			.when('/404', {
				templateUrl: 'app/AppViews/404.html'
			})
			.otherwise({
				redirectTo: '/404'
			});
	}
])