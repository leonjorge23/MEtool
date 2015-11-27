angular.module('couples').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/couples', {
				templateUrl: 'couples/views/list-couples.client.view.html'
			}).
			when('/couples/create', {
				templateUrl: 'couples/views/create-couple.client.view.html'
			}).
			when('/couples/:coupleId', {
				templateUrl: 'couples/views/view-couple.client.view.html'
			}).
			when('/couples/:coupleId/edit', {
				templateUrl: 'couples/views/edit-couple.client.view.html'
			});
	}
]);
