/**
 * @author Filipe Gomes
 */
app.directive('cadastroUsuario', ['AppService', 'md5', '$base64', function (AppService, md5, $base64) {
	return {
		restrict: 'EA',
		templateUrl: 'app/usuario/views/cadastroUsuarioView.html',
		controller: function ($scope) {
			var service = AppService;
			$scope.dto = {};
			$scope.listaPerfis = [];
			
			initController();
			
			$scope.salvar = function () {
				$scope.$emit('load');
				$scope.dto.ativo = true;
				$scope.dto.senha = $base64.encode(md5.createHash($scope.dto.senha));
				
				service.salvar('/usuario', $scope.dto)
					.then(
							function (res) {
								if ( res.data == '' || res.data == null) {
									console.error('Falha ao salvar.');
								} else {
									console.info('Registro salvo!');
									$scope.limpar();
								}								
								$scope.$emit('unload');
							},
							function (err) {
								console.error(err.data.message);
								$scope.$emit('unload');
							});
			};
			
			$scope.limpar = function () {
				$scope.dto = {};
			};
			
			function initController () {
				carregarPerfis();
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
							});
			};
		}
	}
}]);