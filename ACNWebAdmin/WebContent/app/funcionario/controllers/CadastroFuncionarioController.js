/**
 * @author Filipe Gomes
 */
app.controller('CadastroFuncionarioController', ['$scope', 'AppService', '$filter', function($scope, AppService, $filter){
	var service = AppService;
	$scope.dto = {};
	$scope.infoArray = [];
	$scope.listaFuncionarios = [];
	$scope.listaCargos = [];
	$scope.listaLocacoes = [];
	
	initController();
	
	$scope.salvar = function () {
		$scope.$emit('load');
		$scope.dto.ativo = true;
		service.salvar('/funcionario', $scope.dto)
			   .then(
					   function (res) {
						   $scope.listaFuncionarios.push(res.data);
						   console.info('Registro salvo!');
						   $scope.limpar();
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
	
	$scope.selecionarCargoSalarioFixo = function () {
		$scope.dto.salario = $scope.dto.cargo.salarioFixo;
	};
	
	$scope.carregarInfoModal = function (obj) {
		$scope.modalId = 'infoFuncionario';
		$scope.tituloModal = obj.nome;
		$scope.infoArray = [
		                    {
		                    	title: 'CPF',
		                    	data: $filter('cpf')(obj.cpf)
		                    },
		                    {
		                    	title: 'RG',
		                    	data: obj.rg
		                    },
		                    {
		                    	title: 'PIS',
		                    	data: obj.pis
		                    },
		                    {
		                    	title: 'Título de Eleitor',
		                    	data: obj.tituloEleitor
		                    },
		                    {
		                    	title: 'Telefone',
		                    	data: $filter('telefone')(obj.telefone)
		                    },
		                    {
		                    	title: 'E-mail',
		                    	data: obj.email
		                    },
		                    {
		                    	title: 'Endereço',
		                    	data: obj.endereco
		                    },
		                    {
		                    	title: 'Cargo/Função',
		                    	data: obj.cargo.nome
		                    },
		                    {
		                    	title: 'Salário',
		                    	data: $filter('currency')(obj.salario)
		                    },
		                    {
		                    	title: 'Data de Admissão',
		                    	data: $filter('date')(obj.dataAdmissao, 'dd/MM/yyyy')
		                    },
		                    {
		                    	title: 'Locação',
		                    	data: obj.locacao.nome + ' (' + obj.locacao.empresa.nome + ')'
		                    }];		
	};
	
	$scope.configurarCadastroCargo = function (id) {
		$scope.idCadastroCargo = id;
	};
	
	$scope.configurarCadastroLocacao = function (id) {
		$scope.idCadastroLocacao = id;
	}
	
	function initController () {
		carregarCargos();
		carregarLocacoes();
		carregarFuncionarios();
	};
	
	function carregarCargos () {
		$scope.$emit('load');
		service.consultarTudo('/cargo')
			   .then(
				function (res) {
					$scope.listaCargos = res.data;
					$scope.$emit('unload');
				},
				function (err) {
					console.error(err);
					$scope.$emit('unload');
				});
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
				});
	};
	
	function carregarFuncionarios () {
		$scope.$emit('load')
		service.consultarTudo('/funcionario')
			   .then(
					   function (res) {
						   $scope.listaFuncionarios = res.data;
						   $scope.$emit('unload');
					   },
					   function (err) {
						   console.error(err);
						   $scope.$emit('unload');
					   });
	};
	
}]);