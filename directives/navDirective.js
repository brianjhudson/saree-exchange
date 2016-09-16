angular.module('sareeApp').directive('navDirective', function($location){
  return {
        restrict: 'E'
      , templateUrl: "../directives/navDirective.html"
      , link: function(scope, elements, attributes) {
          var message = "Nav Directive Working";
          scope.test = message;
      }
      , controller: function($scope, $location) {
          $scope.borrower=false;
          $scope.lender=false;
          $scope.home=true;
          $scope.loggedIn=false;
          $scope.isCollapsed = true;
          $scope.$on('$routeChangeSuccess',function () {
            $scope.isCollapsed = true;
          });
          $scope.getClass = function (path) {
              if(path === '/') {
                  if($location.path() === '/') {
                      return "active";
                  } else {
                      return "";
                  }
              }

              if ($location.path().substr(0, path.length) === path) {
                  return "active";
              } else {
                  return "";
              }
          }

      }
    }
  });
