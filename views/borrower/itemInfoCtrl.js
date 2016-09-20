angular.module("sareeApp").controller("itemInfoCtrl", function($scope, $state, $stateParams, borrowerService, mainService) {
  function init() {
    $scope.orderItem = orderItem;
    $scope.userId = mainService.userId;
    if ($stateParams.userId) var userId = $stateParams.userId;
    var itemId = $stateParams.itemId;
    var inventory = borrowerService.inventory;
    getItem(itemId, inventory);
  }
  init();
  function orderItem(item) {
    $state.go('order', {itemId: item.itemId, userId: $scope.userId});
  }
  function getItem(itemId, inventory) {
    for (var i = 0; i < inventory.length; i++) {
      if (itemId == inventory[i].itemId) {
      $scope.item = inventory[i];
      }
    }
  }

})
