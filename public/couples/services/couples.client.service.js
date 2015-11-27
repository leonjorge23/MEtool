angular.module('couples').factory('Couples', ['$resource', function($resource) {
	return $resource('api/couples/:coupleId', {
		coupleId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});
}]);
