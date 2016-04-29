/**
 * @author Filipe Gomes
 */
app.directive('modalCadastroLocacao', function (AppService) {
	return {
		restrict: 'EA',
		templateUrl: 'app/locacao/views/cadastroModalLocacaoView.html',
		scope: {
			id: '=',
			listaLocacoes: '='
		},
		controller: function ($scope) {
			var service = AppService;
			$scope.dto = {};
			$scope.listaEmpresas = [];
			
			$scope.salvar = function () {
				$scope.$emit('load');
				$scope.dto.ativo = true;
				service.salvar('/locacao', $scope.dto)
					   .then(
							   function (res) {
								   $scope.listaLocacoes.push(res.data);
								   console.info('Registro salvo!');
								   $scope.limpar();
								   $scope.$emit('unload');
							   },
							   function (err) {
								   console.error(err);
								   $scope.$emit('unload');
							   });
			};
			
			$scope.limpar = function() {
				$scope.dto = {};
			};
			
			carregarEmpresas();
			
			function carregarEmpresas () {
				$scope.$emit('load');
				service.consultarTudo('/empresa')
					   .then(
						function (res) {
							$scope.listaEmpresas = res.data;
							$scope.$emit('unload');
						},
						function (err) {
							console.error(err);
							$scope.$emit('unload');
						});
			};
		}
	};
});