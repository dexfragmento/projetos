var regexSomenteNumero = /[^0-9]+/g;

app.directive('somenteNumero', function () {
					return {
						restrict : 'A',
						terminal : true,
						require : '?ngModel',
						link : function(scope, element, attrs, ngModel) {
							var _somenteNumero = function(param) {
								if (param !== undefined) {
									param = param.replace(regexSomenteNumero, '');
									return param;
								}
							};

							/*
							 * get valor ngModel da controller:
							 * ngModel.$viewValue set valor ngModel da
							 * controller: ngModel.$setViewValue render após
							 * set: ngModel.$render() parser para o scope da
							 * controller: ngModel.$parsers.push(function () {})
							 * formatter para o scope da controller:
							 * ngModel.$formatter.push(function () {})
							 */
							element.bind('keyup', function() {
												ngModel.$setViewValue(_somenteNumero(ngModel.$viewValue));
												ngModel.$render();
											});

							/**
							 * INSERINDO DADOS NO INPUT
							 * 
							 * Faz o parser para a ngModel da controller de
							 * acordo com as regras de implementação
							 */
							ngModel.$parsers.push(function(value) {
								if (true) { // implementar regras, aplicar
											// formatos, etc
									return _somenteNumero(value);
								}
							});

							/**
							 * FORMATANDO DADOS JÁ CARREGADOS DA CONTROLLER
							 * (caso não insira os dados manualmente no input)
							 * 
							 * Utilizada caso o ngModel do elemento já venha
							 * carregado da controller
							 */

							ngModel.$formatters.push(function(value) {
								if (true) {
									return _somenteNumero(value);
								}
							})
						}
					};
				});

		