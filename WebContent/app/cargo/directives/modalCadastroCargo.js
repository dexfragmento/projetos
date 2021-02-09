/**
 * @author Filipe Gomes
 */
app.directive('modalCadastroCargo', function (AppService) {
	return {
		restrict: 'EA',
		templateUrl: 'app/cargo/views/cadastroModalCargoView.html',
		scope: {
			id: '=',
			listaCargos: '='
		},
		controller: function ($scope) {
			$scope.dto = {};
			$scope.salarioVariavel = true;
			
			$scope.salvar = function() {
				$scope.$emit('load');
				$scope.dto.ativo = true;
				
				if($scope.salarioVariavel)
					$scope.dto.salarioFixo = undefined;
				
				var service = AppService.salvar('/cargo', $scope.dto);
				service.then(function(res) {
					$scope.listaCargos.push(res.data);
					$scope.limpar();
					$scope.$emit('unload');
				}, function(err) {
					console.error(err);
					$scope.$emit('unload');
				});
			};
			
			$scope.limpar = function() {
				$scope.dto = {};
				$scope.salarioVariavel = true;
			};
			
			$scope.marcarSalarioVariavel = function () {
				$scope.salarioVariavel = !$scope.salarioVariavel;
			};
		}
	};
});