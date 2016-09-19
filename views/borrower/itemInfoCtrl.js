angular.module("sareeApp").controller("itemInfoCtrl", function($scope, $state, $stateParams, borrowerService) {
  function init() {
    $scope.orderItem = orderItem;
    if ($stateParams.userId) var userId = $stateParams.userId;
    var itemId = $stateParams.itemId;
    var inventory = borrowerService.inventory;
    getItem(itemId, inventory);
  }
  init();

  function getItem(itemId, inventory) {
    for (var i = 0; i < inventory.length; i++) {
      if (itemId == inventory[i].itemId) {
      $scope.item = inventory[i];
      console.log($scope.item);
      }
    }
  }
  function orderItem(item) {
    $state.go('order', {itemId: item.itemId, userId: $stateParams.userId});
  }

})
