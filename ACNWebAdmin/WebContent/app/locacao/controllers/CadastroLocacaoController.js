/**
* @author Filipe Gomes
**/
app.controller('CadastroLocacaoController', ['$scope', 'AppService', function($scope, AppService){
	var service = AppService;
	
	$scope.dto = {};
	$scope.listaLocacoes = [];
	$scope.listaEmpresas = [];
	
	initController();
	
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
						   $scope.$emit('msg', {type: 'success', title: '', msg: 'Registro salvo com sucesso.'});
					   },
					   function (err) {
						   console.error(err);
						   $scope.$emit('unload');
						   $scope.$emit('msg', {type: 'danger', title: '', msg: 'Falha ao salvar registro.'});
					   });
	};
	
	$scope.deletar = function (id) {
		if (id !== undefined) {
			$scope.$emit('load');
			service.deletar('/locacao', id)
				   .then(
						   function (res) {
							   $scope.listaLocacoes = res.data;
							   console.info('Registro deletado!');
							   $scope.$emit('unload');
							   $scope.$emit('msg', {type: 'success', title: '', msg: 'Registro deletado com sucesso.'});
						   },
						   function (err) {
							   console.error(err);
							   $scope.$emit('unload');
							   $scope.$emit('msg', {type: 'danger', title: '', msg: 'Falha ao deletar registro.'});
						   });
		}
	};
	
	$scope.limpar = function () {
		$scope.dto = {};
	};
	
	$scope.configurarCadastroEmpresa = function (id) {
		$scope.idCadastroEmpresa = id;
	};
	
	function initController () {
		carregarLocacoes();
		carregarEmpresas();
	};
	
	function carregarLocacoes () {
		$scope.$emit('load');
		service.consultarTudo('/locacao')
			   .then(
				function (res) {
					$scope.listaLocacoes = res.data;
					$scope.$emit('unload');
				},
				function (err) {
					console.error(err);
					$scope.$emit('unload');
					$scope.$emit('msg', {type: 'danger', title: '', msg: 'Falha ao carregar locações.'});
				});
	};
	
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
					$scope.$emit('msg', {type: 'danger', title: '', msg: 'Falha ao carregar empresas.'});
				});
	};
}]);