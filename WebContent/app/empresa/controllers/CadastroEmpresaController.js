/**
 * @author Filipe Gomes
 */
app.controller('CadastroEmpresaController', ['$scope', 'AppService', function($scope, AppService) {
	$scope.dto = {};
	$scope.listaEmpresas = [];
	
	initController();
	
	function initController () {
		carregarEmpresas();
	};
	
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
					$scope.$emit('msg', {type: 'success', title: '', msg: 'Registro salvo com sucesso.'});
				},
				function (err) {
					console.error(err);
					$scope.$emit('unload');
					$scope.$emit('msg', {type: 'danger', title: '', msg: 'Falha ao salvar registro.'});
				});
	};
	
	$scope.deletar = function(id) {				
		if (id !== undefined) {
			$scope.$emit('load');
			var service = AppService.deletar('/empresa', id);
			service.then(function(res) {
				$scope.listaEmpresas = res.data;
				console.info('Registro deletado!');
				$scope.$emit('unload');
				$scope.$emit('msg', {type: 'success', title: '', msg: 'Registro deletado com sucesso.'});
			}, function(err) {
				console.error(err);
				$scope.$emit('unload');
				$scope.$emit('msg', {type: 'danger', title: '', msg: 'Falha ao deletar registro.'});
			});
		}				
	};
	
	$scope.limpar = function () {
		$scope.dto = {};
	};
		
	function carregarEmpresas () {
		$scope.$emit('load');
		var service = AppService.consultarTudo('/empresa');
		
		service.then(
				function (res) {
					$scope.listaEmpresas = res.data;
					$scope.$emit('unload');
				},
				function (err) {
					console.error(err);
					$scope.$emit('unload');
					$scope.$emit('msg', {type: 'danger', title: '', msg: 'Falha ao carregar empresas.'});
				});
	};
	
}]);