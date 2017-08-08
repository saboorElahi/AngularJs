(function() {
  'use strict';

  angular.module('myFirstApp', [])

  .controller('myFirstController',function($scope){

    // Sharing Data through views
    $scope.name = 'Saboor';
    $scope.sayHello = function() {
      return "Hello Saboor";
    };

      // Calculator App
      $scope.totalValue = 0;
      $scope.displayNumeric = function()
      {
        var totalNameValue = calculateNumericForString($scope.name);
        $scope.totalValue = totalNameValue;
      };

      function calculateNumericForString(string){
        var totalStringValue = 0;
        for (var i = 0; i < string.length; i++) {
          totalStringValue += string.charCodeAt(i);
        }
        return totalStringValue;
      }

  })

})();
