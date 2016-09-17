angular.module("sareeApp").directive("carouselDirective", function(){
  return {
    restrict: "E"
    , replace: true
    , templateUrl: "../directives/carouselDirective.html"
    , scope: {
      slides: "="
    }
    , link: function(scope, elements, attributes) {
    }
    , controller: function($scope) {
    }
  }
});
