angular.module("sareeApp").controller("borrowerCtrl", function($scope, mainService, borrowerService, $stateParams) {
  function init() {
    getInventory();
    if ($stateParams.userId) {
      var userId = $stateParams.userId;
      getUserInfo();
      getViewedItems();
      getOrders();
    }
  }
  function getInventory() {
    mainService.getInventory().then(function(result) {
      console.log(result);
      $scope.inventory = result;
    });
  }
  function getUserInfo() {
    borrowerService.getUserInfo(userId).then(function(result) {
        $scope.user = result;
    });
  }
  function getViewedItems() {
    borrowerService.getViewedItems(userId).then(function(result) {
      console.log(result);
      $scope.viewedItems = result;
    });
  }
  function getOrders() {
    borrowerService.getOrders(userId).then(function(result) {
      console.log(result)
      $scope.orders = result;
    });
  }
  init();
});
