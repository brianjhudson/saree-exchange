angular.module('sareeApp').directive('navDirective', function(){
  return {
        restrict: 'E'
      , templateUrl: "../directives/navDirective.html"
      , link: function(scope, elements, attributes) {
          var message = "Nav Directive Working";
          scope.test = message;
      }
  }
})
