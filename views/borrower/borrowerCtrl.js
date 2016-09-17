angular.module("sareeApp").controller("borrowerCtrl", function($scope, mainService, borrowerService) {
  function init() {
    getInventory();
  }
  function getInventory() {
    mainService.getInventory().then(function(result) {
      console.log(result);
      $scope.inventory = result;
      return;
    })
  }
  $scope.serviceTest = borrowerService.test;
  init();
})
