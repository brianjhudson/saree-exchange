angular.module("sareeApp").controller("borrowerCtrl", function($scope, $state, $rootScope, mainService) {
  function init() {
    var userId = $rootScope.userId;
    $scope.slides = mainService.borrowerSlides;
    $scope.interval = 3000;
    $scope.viewItem = viewItem;
    getInventory();
  }

  function getInventory() {
    if (mainService.inventory) {
      $scope.inventory = mainService.inventory;
    }
    else {
      mainService.getInventory().then(function(result){
        mainService.saveInventory(result);
        $scope.inventory = result;
      })
    }
  }

  function viewItem (item) {
    $scope.selectedItem = item;
    $state.go('browse.borrower_item_info', {itemId: item.itemId});
  }

  init();
});
