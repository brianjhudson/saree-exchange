angular.module("sareeApp").controller("lenderCtrl", function($scope, lenderService) {
  $scope.test = "Lender Control Is Working";
  $scope.serviceTest = lenderService.test;
})
