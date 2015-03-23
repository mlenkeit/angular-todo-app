'use strict';

/**
 * @ngdoc function
 * @name angularTodoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTodoAppApp
 */
angular.module('angularTodoAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
