/**
 * @author Filipe Gomes
 */
app.directive('cadastroUsuario', ['AppService', 'md5', '$base64', '$rootScope', 'LoginService', '$window',
                                  function (AppService, md5, $base64, $rootScope, LoginService, $window) {
	return {
		restrict: 'EA',
		templateUrl: 'app/usuario/views/cadastroUsuarioView.html',
		controller: function ($scope) {
			var service = AppService;
			$scope.dto = {};
			$scope.listaPerfis = [];
			$scope.listaUsuarios = [];
			$scope.modalConfirmacaoId = 'modalConfirmacao';
			$scope.tituloModalConfirmacao = 'Confirmar';
			$scope.conteudoTituloModalConfirmacao = 'Tentativa de desativação do usuário atualmente logado.';
			$scope.conteudoCorpoModalConfirmacao = 'Se continuar, você será automaticamente desativado e deslogado do sistema.';
			
			initController();
			
			$scope.salvar = function () {
				$scope.$emit('load');
				$scope.dto.ativo = true;
				$scope.dto.login = $scope.dto.login.toLowerCase();
				$scope.dto.senha = $base64.encode(md5.createHash($scope.dto.senha));
				
				service.salvar('/usuario', $scope.dto)
					.then(
							function (res) {
								if ( res.data == '' || res.data == null) {
									$scope.$emit('msg', {type: 'danger', title: '', msg: 'Falha ao salvar registro.'});
								} else {									
									$scope.limpar();
									$scope.$emit('msg', {type: 'success', title: '', msg: 'Registro salvo com sucesso.'});
									$scope.listaUsuarios.push(res.data);
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
						$("#modalConfirmacao").modal("show");
					});
				} else {
					$scope.alterarAtivacaoEffective(obj, false);
				}
			};
			
			$scope.alterarAtivacaoEffective = function (obj, isUsuarioLogado) {
				$scope.$emit('load');
				obj.ativo = !obj.ativo;				
				service.atualizar('/usuario', obj)
					.then(
							function (res) {
								obj = res.data;
								$scope.$emit('unload');
								$scope.$emit('msg', {type: 'success', title: '', msg: 'Ativação alterada com sucesso.'});
								if (isUsuarioLogado) {
									$(document).ready(function(){
										$("#modalConfirmacao").modal("hide");
									});
									LoginService.limparCredenciais();
									$window.location.reload();
								}								
							},
							function (err) {
								console.error(err);
								$scope.$emit('unload');
								$scope.$emit('msg', {type: 'danger', title: '', msg: 'Falha ao alterar ativação do registro.'});
								$(document).ready(function(){
									$("#modalConfirmacao").modal("hide");
								});
								obj.ativo = !obj.ativo;
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