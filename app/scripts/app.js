/* global app:true */

'use strict';

/**
 * @ngdoc overview
 * @name squealreviewsApp
 * @description
 * # squealreviewsApp
 *
 * Main module of the application.
 */
var app = angular
  .module('squealreviewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/reviews/:businessName', {
        templateUrl: 'views/reviews.html',
        controller: 'ReviewsCtrl'
      })
      .when('/members/:reviewerId', {
        templateUrl: 'views/member.html',
        controller: 'MembersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
