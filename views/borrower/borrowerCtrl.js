angular.module("sareeApp").controller("borrowerCtrl", function($scope, borrowerService) {
  $scope.test = "Borrower Control Is Working";
  $scope.serviceTest = borrowerService.test;
})
