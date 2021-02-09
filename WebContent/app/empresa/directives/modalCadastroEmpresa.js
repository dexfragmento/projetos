/**
 * @author Filipe Gomes
 */
app.directive('modalCadastroEmpresa', function (AppService) {
	return {
		restrict: 'EA',
		templateUrl: 'app/empresa/views/cadastroModalEmpresaView.html',
		scope: {
			id: '=',
			listaEmpresas: '='
		},
		controller: function ($scope) {
			$scope.dto = {};
			
			$scope.salvar = function () {
				$scope.$emit('load');
				$scope.dto.ativo = true;
				var service = AppService.salvar('/empresa', $scope.dto);		
				service.then(
						function (res) {
							$scope.listaEmpresas.push(res.data);
							$scope.limpar();
							console.info('Registro salvo!');
							$scope.$emit('unload');
						},
						function (err) {
							console.error(err);
							$scope.$emit('unload');
						});
			};
			
			$scope.limpar = function () {
				$scope.dto = {};
			};
		}
	};
});