'use strict';

/* Reviews Controller */
app.controller('ReviewsCtrl', ['$http', '$scope', '$routeParams', function ($http, $scope, $routeParams) {
  	var ctrl = this;
  	$http.get('scripts/reviews.json').success (function (data) {
  		ctrl.reviews = data;
  		$scope.whichBusiness = $routeParams.businessName;
  	});
  	$http.get('scripts/members.json').success (function (membersData) {
  		ctrl.information = membersData;
  		$scope.whichUser = ctrl.information;
  	});

  }]);
