'use strict';


app
/*Filter to find unique business names for index page*/
  .filter('unique', function() { 
    return function(input, key) {
      var uniqueNamesReviews = {};
      var businessNames = [];
    	for (var i=0; i<input.length; i++) {
	    	if (typeof uniqueNamesReviews[input[i][key]] === 'undefined') {
	    		uniqueNamesReviews[input[i][key]] = '';
	    		businessNames.push(input[i]);
	    	}
    	}
      return businessNames;
	};
  })
/*Filter to obtain array of ratings as integers for each business*/
  .filter('getField', function() {
    return function(input, key) {
      var ratings = [];
      for (var i=0; i<input.length; i++) {
        var x = parseInt(input[i][key]);
        ratings.push(x);
      }
      return ratings;
    };
  });

