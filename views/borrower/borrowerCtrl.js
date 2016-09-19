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
      getUserInfo();
      getViewedItems();
      getOrders();
    }
  }

  function getInventory() {
    mainService.getInventory().then(function(result) {
      $scope.inventory = result;
      borrowerService.saveInventory($scope.inventory);
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


  function viewItem (item) {
    $scope.selectedItem = item;
    $state.go('browse.borrower_item_info', {itemId: item.itemId, userId: $stateParams.userId});
  }

  // function viewItem (item) {
  //   $scope.selectedItem = item;
  //   $scope.viewModal = !$scope.viewModal;
  // };

  init();
});
