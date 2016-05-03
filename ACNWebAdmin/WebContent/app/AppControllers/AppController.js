/**
* @author Filipe Gomes
**/

app.controller('AppController', ['$rootScope', '$scope', 'LoginService', 'AppService', 'md5', '$base64', '$location', '$cookieStore',
                                 function($rootScope, $scope, LoginService, AppService, md5, $base64, $location, $cookieStore){	
	$scope.$on('load', function () {
		$scope.loading = true;
	});

	$scope.$on('unload', function () {
		$scope.loading = false;
	});
	
	$scope.$on('login', function () {
		$scope.isLogin = false;
	});
	
	$scope.$on('logout', function () {
		$scope.isLogin = true;
	});
	
	$scope.logout = function () {
		$scope.isLogin = true;
		LoginService.limparCredenciais();
	};
	
	initController();
	
	function initController () {
		$rootScope.globals = $cookieStore.get('globals') || {};
		if (!$rootScope.globals) {			
			$scope.isLogin = true;
		} else if(!$rootScope.globals.usuarioLogado){
			$scope.isLogin = true;
		} else {
			$scope.isLogin = false;
		}
	};
	
	$scope.login = function (obj) {
		$scope.$emit('load');
		
		var newObj = {
				login: obj.login,
				senha: $base64.encode(md5.createHash(obj.senha))
		};
		
		var service = AppService.autenticar(newObj);
		
		service.then(
				function (res) {
					LoginService.setCredenciais(res.data.nome, res.data.login, res.data.senha);
					$location.path('/');
					$scope.isLogin = false;
					$scope.$emit('unload');
				},
				function (err) {
					console.error(err.data.message);
					obj.login = null;
					obj.senha = null;
					LoginService.limparCredenciais();
					$scope.$emit('unload');
				});
	};
}]);