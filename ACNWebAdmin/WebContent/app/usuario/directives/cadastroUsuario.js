/**
 * @author Filipe Gomes
 */
app.directive('cadastroUsuario', ['AppService', 'md5', '$base64', '$rootScope', function (AppService, md5, $base64, $rootScope) {
	return {
		restrict: 'EA',
		templateUrl: 'app/usuario/views/cadastroUsuarioView.html',
		controller: function ($scope) {
			var service = AppService;
			$scope.dto = {};
			$scope.listaPerfis = [];
			$scope.listaUsuarios = [];
			$scope.modalConfirmacaoId = "modalConfirmacao";
			
			initController();
			
			$scope.salvar = function () {
				$scope.$emit('load');
				$scope.dto.ativo = true;
				$scope.dto.senha = $base64.encode(md5.createHash($scope.dto.senha));
				
				service.salvar('/usuario', $scope.dto)
					.then(
							function (res) {
								if ( res.data == '' || res.data == null) {
									$scope.$emit('msg', {type: 'danger', title: '', msg: 'Falha ao salvar registro.'});
								} else {									
									$scope.limpar();
									$scope.$emit('msg', {type: 'success', title: '', msg: 'Registro salvo com sucesso.'});
								}								
								$scope.$emit('unload');
							},
							function (err) {
								console.error(err.data.message);
								$scope.$emit('unload');
								$scope.$emit('msg', {type: 'danger', title: '', msg: 'Falha ao salvar registro.'});
							});
			};
			
			$scope.limpar = function () {
				$scope.dto = {
						login: null,
						senha: null
				};
			};
			
			$scope.alterarAtivacao = function (obj) {
				if (obj.login == $rootScope.globals.usuarioLogado.login) {
					$scope.dadoUsuario = obj;
					/**
					 * Código para abrir modal de confiramção
					 */
					$(document).ready(function(){
						$("#btnInativar").click(function(){
					        $("#modalConfirmacao").modal("show");
					    });
					    
						$("#myModal").on('show.bs.modal', function () {
//				            alert('The modal is about to be shown.');
					    });
					});
				}
			};
			
			$scope.alterarAtivacaoEffective = function (obj) {
				$scope.$emit('load');
				obj.ativo = !obj.ativo;				
				service.atualizar('/usuario', obj)
					.then(
							function (res) {
								obj = res.data;
								$scope.$emit('unload');
								$scope.$emit('msg', {type: 'success', title: '', msg: 'Ativação alterada com sucesso.'});
							},
							function (err) {
								console.error(err);
								$scope.$emit('unload');
								$scope.$emit('msg', {type: 'danger', title: '', msg: 'Falha ao alterar ativação do registro.'});
							});
			};
			
			function initController () {
				carregarPerfis();
				carregarUsuarios();
			};
			
			function carregarPerfis () {
				$scope.$emit('load');
				service.consultarTudo('/perfil')
					.then(
							function (res) {
								$scope.listaPerfis = res.data;
								$scope.$emit('unload');
							},
							function (err) {
								console.error(err);
								$scope.$emit('unload');
								$scope.$emit('msg', {type: 'danger', title: '', msg: 'Falha ao carregar perfis.'});
							});
			};
			
			function carregarUsuarios () {
				$scope.$emit('load');
				service.consultarTudo('/usuario')
					.then(
							function (res) {
								$scope.listaUsuarios = res.data;
								$scope.$emit('unload');
							},
							function (err) {
								console.error(err);
								$scope.$emit('unload');
								$scope.$emit('msg', {type: 'danger', title: '', msg: 'Falha ao carregar usuários.'})
							});
			};
		}
	}
}]);