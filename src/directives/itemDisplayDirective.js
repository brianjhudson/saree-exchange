angular.module("sareeApp").directive("itemDisplayDirective", function($state, $stateParams, mainService){
  return {
    restrict: "E"
    , replace: true
    , templateUrl: "../directives/itemDisplayDirective.html"
    , scope: {
        items: "="
      }
    , link: function(scope, element, attributes) {
        scope.selectItem = function(element) {
          scope.viewItem(element);
        }
      }
    , controller: function($scope, $state, $stateParams) {

        $scope.viewItem = function(item) {
          $state.go('browse.borrower_item_info', {itemId: item.itemId, userId: $scope.userId});
        }

    }

  }

});
