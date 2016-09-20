angular.module("sareeApp").controller("viewOrdersCtrl", function($scope, $state, $rootScope, mainService) {
  function init() {
    $scope.slides = mainService.borrowerSlides;
    $scope.userId = $rootScope.userId;
    $scope.orders = mainService.getOrders($scope.userId);
  }
  init();
});
