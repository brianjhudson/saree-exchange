angular.module("sareeApp").directive("itemDisplayDirective", function($state, $stateParams){
  return {
    restrict: "E"
    , replace: true
    , templateUrl: "../directives/itemDisplayDirective.html"
    , scope: {
      items: "="
    }
    , link: function(scope, elements, attributes) {
      scope.viewItem = function(item) {
        $state.go('browse.borrower_item_info', {itemId: item.itemId, userId: $scope.userId});
      }

    }
    , controller: function($scope) {

    }

    }
  }
});
