'use strict';

/* Members Controller */
app.controller('MembersCtrl', ['$http', '$scope', '$routeParams', function ($http, $scope, $routeParams) {
  	var members = this;
  	$http.get('scripts/reviews.json').success (function (reviewsData) {
  		members.reviews = reviewsData;
  		$scope.whichMemberId = $routeParams.reviewerId;
  	});
  	$http.get('scripts/members.json').success (function (membersData) {
  		members.information = membersData;
  	});

  }]); 