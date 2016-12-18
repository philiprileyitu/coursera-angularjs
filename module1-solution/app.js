(function () {
  'use strict';

  //angular.module('LunchCheck', []);
  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  var getLengthOfItems = function (unparsedItems) {
    var items = "";
    if (unparsedItems.length > 0)
      items = unparsedItems.split(",");
    return items.length;
  };

  function LunchCheckController($scope) {
    console.log('jlkjælaskjfælakskjdfælasjfæalsfjaælskfj');
    $scope.items = "";
    $scope.message = "";
    $scope.checkIfTooMuch = function () {

      var len = getLengthOfItems($scope.items);

      if (len < 1) {
        $scope.message = "Please enter data first";
      } else if (len > 0 && len <= 3) {
        $scope.message = "Enjoy";
      } else {
        $scope.message = "Too much!!";
      }
    };
  }do {

  } while (true);;
})();
