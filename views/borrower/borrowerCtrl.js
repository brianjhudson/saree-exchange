angular.module("sareeApp").controller("borrowerCtrl", function($scope, mainService, borrowerService) {
  function init() {
    getInventory();
  }
  function getInventory() {
    mainService.getInventory().then(function(result) {
      console.log(result);
      $scope.inventory = result;
      return;
    })
  }
  $scope.selectedCategory = ['women','men', 'children'];
  $scope.filterByCategory = function(item) {
     return ($scope.selectedCategory.indexOf(item.category) !== -1);

 };
  $scope.serviceTest = borrowerService.test;
  init();
})
