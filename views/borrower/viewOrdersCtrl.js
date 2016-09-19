angular.module("sareeApp").controller("viewOrdersCtrl", function($scope, $state, $stateParams, borrowerService, mainService) {
  function init() {
    $scope.slides = borrowerService.slides;
    $scope.orders = mainService.orders;
    if ($stateParams.userId) var userId = $stateParams.userId;
    
  }
  init();
});
