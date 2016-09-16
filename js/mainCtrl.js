angular.module("sareeApp").controller("mainCtrl", function($scope, mainService) {
  $scope.test = "Main Control Test Working";
  $scope.serviceTest = mainService.test;
  $scope.checkLogin = function() {
    
  }
})
