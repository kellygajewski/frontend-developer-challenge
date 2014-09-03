'use strict';

/**
 * @ngdoc function
 * @name squealreviewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the squealreviewsApp
 */



/* Main Controller */  
app.controller('MainCtrl', ['$http', '$scope', function ($http, $scope) {
  	var businesses = this;
  	businesses.reviews=[];
  	$http({method: 'GET', url: 'scripts/reviews.json'}).success(function(data) {
  		businesses.reviews = data;
  	});
  	/*Function to find average rating for each business*/
  	$scope.getAverage = function (input) {
  		var sum = 0;
  		for (var j = 0; j < input.length; j++) {
  			sum += input[j];
  		}
  		var avg = sum / input.length;
  		return Math.round(avg * 100) / 100;
  	};  
  }]);


 

