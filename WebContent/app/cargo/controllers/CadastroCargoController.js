/**
 * @author Filipe Gomes
 */
app.controller('CadastroCargoController', [ '$scope', 'AppService', '$filter',
		function($scope, AppService, $filter) {
			$scope.dto = {};
			$scope.infoArray = [];
			$scope.listaCargos = [];
			$scope.salarioVariavel = true;

			initController();

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
					$scope.$emit('msg', {type: 'success', title: 'OK!', msg: 'Registro salvo com sucesso.'});
				}, function(err) {
					console.error(err);
					$scope.$emit('unload');
					$scope.$emit('msg', {type: 'danger', title: 'ERRO!', msg: 'Falha ao salvar registro.'});
				});
			};

			$scope.limpar = function() {
				$scope.dto = {};
				$scope.salarioVariavel = true;
			};

			$scope.deletar = function(id) {
				if (id !== undefined) {
					$scope.$emit('load');
					var service = AppService.deletar('/cargo', id);
					service.then(function(res) {
						$scope.listaCargos = res.data;
						$scope.$emit('unload');
						$scope.$emit('msg', {type: 'success', title: 'OK!', msg: 'Registro deletado com sucesso.'});
					}, function(err) {
						console.error(err);
						$scope.$emit('unload');
						$scope.$emit('msg', {type: 'danger', title: 'ERRO!', msg: 'Falha ao deletar registro.'});
					});
				}				
			};
			
			$scope.marcarSalarioVariavel = function () {
				$scope.salarioVariavel = !$scope.salarioVariavel;
			};
			
			$scope.carregarInfoModal = function (obj) {
				$scope.modalId = 'infoCargo';
				$scope.tituloModal = obj.nome;
				$scope.infoArray = [{
										title: 'Salário Fixo',
										data: $filter('currency')(obj.salarioFixo)
									},
									{
										title: 'Descrição',
										data: obj.descricao
									}];
			};

			function initController() {
				/**
				 * Inicializacao da controller
				 */
				 carregarCargos();
			};

			function carregarCargos () {
				$scope.$emit('load');
				var service = AppService.consultarTudo('/cargo');

				service
				 	.success(function (data) {
				 		$scope.listaCargos = data;
				 		$scope.$emit('unload');
				 	})
				 	.error(function (err) {
				 		console.error(err);
				 		$scope.$emit('msg', {type: 'danger', title: '', msg: 'Falha ao carregar cargos.'});
				 	});
			};
		} ]);