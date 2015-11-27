angular.module('couples').controller('CouplesController', ['$scope', '$routeParams', '$location', 'Authentication', 'Couples',
	function($scope, $routeParams, $location, Authentication, Couples) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var couple = new Couples({
				hisName: this.hisName,
				herName: this.herName,
				lastName: this.lastName,
				address: this.address,
				city: this.city,
				zip: this.zip,
				state: this.state,
				homePhone: this.homePhone,
				hisCell: this.hisCell,
				herCell: this.herCell,
				primaryEmail: this.primaryEmail,
				secondaryEmail: this.secondaryEmail,
				photo: this.photo,
				isActive: this.isActive
			});

			couple.$save(function(response) {
				$location.path('couples/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
		$scope.find = function() {
			$scope.couples = Couples.query();
		};

		$scope.findOne = function() {
			$scope.couple = Couples.get({
				coupleId: $routeParams.coupleId
			});
		};
		$scope.update = function() {
			$scope.couple.$update(function() {
				$location.path('couples/' + $scope.couple._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
		$scope.delete = function(couple) {
			if (couple) {
				couple.$remove(function() {
					for (var i in $scope.couples) {
						if ($scope.couples[i] === couple) {
							$scope.couples.splice(i, 1);
						}
					}
				});
			} else {
				$scope.couple.$remove(function() {
					$location.path('couples');
				});
			}
		};


	}
]);
