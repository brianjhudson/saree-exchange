angular.module("sareeApp").controller("itemInfoCtrl", function($scope, $state, $stateParams, mainService) {

  function init() {
    $scope.orderItem = orderItem;
    var itemId = $stateParams.itemId;
    var inventory = mainService.inventory;
    $scope.item = getItem(itemId, inventory);
  }

  function orderItem(item) {
    $state.go('order', {itemId: item.itemId});
  }

  function getItem(itemId, inventory) {
    for (var i = 0; i < inventory.length; i++) {
      if (itemId == inventory[i].itemId) {
        return inventory[i];
      }
    }
  }
  init();

})
