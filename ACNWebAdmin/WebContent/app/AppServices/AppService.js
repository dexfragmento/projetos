/**
 * @author Filipe Gomes
 */
app.factory('AppService', function($http) {
	var restUrl = '/ACNWebAdmin/rest';
	var service = {};
	
	function _consultarTudo (url) {
		return $http.get(restUrl + url);
	};
	
	function _consultarPorId (url, id) {
		return $http.get(restUrl + url + '/' + id);
	};
	
	function _consultarPorFiltro (url, object) {
		return $http.get(restUrl + url, object);
	};
	
	function _salvar (url, object) {
		return $http.post(restUrl + url, object);
	};
	
	function _atualizar (url, object) {
		return $http.put(restUrl + url, object);
	};
	
	function _deletar (url, id) {
		return $http.delete(restUrl + url + '/' + id);
	};
	
	function _autenticar (obj) {
		return $http.post(restUrl + '/login/', obj);
	};
	
	service.consultarTudo = _consultarTudo;
	service.consultarPorId = _consultarPorId;
	service.consultarPorFiltro = _consultarPorFiltro;
	service.salvar = _salvar;
	service.atualizar = _atualizar;
	service.deletar = _deletar;
	service.autenticar = _autenticar;
	
	return service;
});
