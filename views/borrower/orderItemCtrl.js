angular.module("sareeApp").controller("orderItemCtrl", function($scope, $state, $stateParams, $rootScope, mainService) {
  function init() {
    $scope.slides = mainService.borrowerSlides;
    $scope.placeOrder = placeOrder;
    $scope.userId = $rootScope.userId;
    var itemId = $stateParams.itemId;
    var inventory = mainService.inventory;
    $scope.item = getItem(itemId, inventory);
  }
  init();

  function getItem(itemId, inventory) {
    for (var i = 0; i < inventory.length; i++) {
      if (itemId == inventory[i].itemId) {
        return inventory[i];
      }
    }
  }
  function placeOrder(item, order) {
    mainService.placeOrder(item, order);
    $state.go('view_orders');
  }

})
