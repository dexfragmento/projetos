/**
 * @author Filipe Gomes
 */
app.controller('AdministracaoUsuarioController', ['$scope', 'md5', function ($scope, md5) {
	
	$scope.viewObj = {
		isCadastro: true,
		isConsulta: false,
		isAdministracaoPerfil: false
	};
	
	$scope.view = function (param) {
		if ( param == 'cadastro' ) {
			$scope.viewObj.isCadastro = true;
			$scope.viewObj.isConsulta = false;
			$scope.viewObj.isAdministracaoPerfil = false;
		} else if ( param == 'consulta' ) {
			$scope.viewObj.isCadastro = false;
			$scope.viewObj.isConsulta = true;
			$scope.viewObj.isAdministracaoPerfil = false;
		} else if ( param == 'administracaoPerfil' ) {
			$scope.viewObj.isAdministracaoPerfil = true;
			$scope.viewObj.isCadastro = false;
			$scope.viewObj.isConsulta = false;
		}
	};
	
}]);