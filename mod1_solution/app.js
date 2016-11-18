(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = [$scope];
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.message = "";
  $scope.messageStyle={};
  $scope.border={};

  $scope.checkItems = function() {
  	if ($scope.items == ""){
  		$scope.message="Please enter data first";
  		$scope.messageStyle = "text-danger";
  		$scope.border = {"border-color":"red"};

  	} else {
  		var arrayOfItems = $scope.items.split(',');
  		var numberOfItems = arrayOfItems.filter(String).length;
  		$scope.messageStyle = "text-success";
  		$scope.border = {"border-color":"green"}
  		if (numberOfItems <=3) {
  			$scope.message = "Enjoy!";
  		} else {
  			$scope.message = "Too much!";
  		}

  	}
  };


}


}) ();
