/**
 * @author Filipe Gomes
 */
app.directive('autoFill', function () {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, element, attrs, ctrl) {
			element.unbind('input').unbind('keydown').unbind('change');
			
			if(angular.isDefined(attrs.submit)){
				scope.$on('FormSubmitted', function () {
					ctrl.$setViewValue(element.val());
				});
			}
		}
	}
}).directive('autoSubmit', function () {
	return {
		link: function (scope, element, attrs) {
			element.bind('click', function (event) {
				scope.$broadcast('FormSubmitted');
			});
		}
	}	
});