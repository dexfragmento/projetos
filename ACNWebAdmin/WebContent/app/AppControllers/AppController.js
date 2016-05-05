/**
* @author Filipe Gomes
**/
app.controller('AppController', ['$rootScope', '$scope', 'LoginService', 'AppService', 'md5', '$base64', '$location', '$cookieStore', '$timeout',
                                 function($rootScope, $scope, LoginService, AppService, md5, $base64, $location, $cookieStore, $timeout){	
	$scope.$on('load', function () {
		$scope.loading = true;
	});

	$scope.$on('unload', function () {
		$scope.loading = false;
	});
	
	$scope.$on('msg', function (event, param) {
		$scope.exibeMsg = true;
		$scope.type = param.type;
		$scope.title = param.title;
		$scope.msg = param.msg;
		
		$timeout(function() {
	        $scope.exibeMsg = false;
	    }, 5000);
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
			$scope.usuarioLogado = $rootScope.globals.usuarioLogado.nome;
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
					$scope.usuarioLogado = res.data.nome;
					$scope.$emit('unload');
				},
				function (err) {
					console.error(err.data.message);
					obj.login = null;
					obj.senha = null;
					LoginService.limparCredenciais();
					$scope.$emit('unload');
					$scope.$emit('msg', {type: 'danger', title: 'ATENÇÃO!', msg: err.data.message});
				});
	};
}]);