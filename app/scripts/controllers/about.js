'use strict';

/**
 * @ngdoc function
 * @name angularTodoAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTodoAppApp
 */
angular.module('angularTodoAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
