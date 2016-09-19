angular.module("sareeApp").controller("viewOrdersCtrl", function($scope, $state, $stateParams, borrowerService, mainService) {
  function init() {
    $scope.slides = borrowerService.slides;
    $scope.userId = mainService.userId;
    $scope.orders = mainService.getOrders($scope.userId);    
  }
  init();
});
