angular.module("sareeApp").controller("orderItemCtrl", function($scope, $state, $stateParams, borrowerService, mainService) {
  function init() {
    $scope.slides = borrowerService.slides;
    $scope.placeOrder = placeOrder;
    if ($stateParams.userId) var userId = $stateParams.userId;
    $scope.userId = mainService.userId;
    console.log($scope.userId);
    var itemId = $stateParams.itemId;
    var inventory = borrowerService.inventory;
    getItem(itemId, inventory);
  }
  init();

  function getItem(itemId, inventory) {
    for (var i = 0; i < inventory.length; i++) {
      if (itemId == inventory[i].itemId) {
      $scope.item = inventory[i];

      }
    }
  }
  function placeOrder(item, order) {
    borrowerService.placeOrder(item, $scope.userId, order);
    $state.go('view_orders', {userId: $scope.userId});
  }

})
