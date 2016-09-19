angular.module("sareeApp").controller("borrowerCtrl", function($scope, mainService, borrowerService, $stateParams, $state) {
  function init() {
    $scope.slides = borrowerService.slides;
    getInventory();
    $scope.viewItem = viewItem;
    $scope.modalShown = false;
    $scope.returnToBrowse = function (){
      $scope.selectedItem = {};
      $scope.viewModal = !$scope.viewModal;
    }
    if ($stateParams.userId) {
      var userId = $stateParams.userId;
    }
  }

  function getInventory() {
    mainService.getInventory().then(function(result) {
      $scope.inventory = result;
      borrowerService.saveInventory($scope.inventory);
    });
  }

  function viewItem (item) {
    $scope.selectedItem = item;
    $state.go('browse.borrower_item_info', {itemId: item.itemId, userId: $stateParams.userId});
  }


  init();
});
