angular.module('sareeApp').directive('navDirective', function($location){
  return {
        restrict: 'E'
      , templateUrl: "../directives/navDirective.html"
      , scope: {
          loggedIn: "="
          , userId: "="
      }
      , link: function(scope, elements, attributes) {
          var message = "Nav Directive Working";
          scope.test = message;
      }
      , controller: function($scope, $location) {
          $scope.borrower=false;
          $scope.lender=false;
          $scope.home=true;
          $scope.isCollapsed = true;
          $scope.$on('$routeChangeSuccess',function () {
            $scope.isCollapsed = true;
          });
          // Condense this code if possible later
          $scope.setHomeStatus = function() {
            $scope.home = true;
            $scope.borrower = false;
            $scope.lender = false;
          }
          $scope.setBorrowStatus = function() {
            $scope.home = false;
            $scope.borrower = true;
            $scope.lender = false;
          }
          $scope.setLendStatus = function() {
            $scope.home = false;
            $scope.borrower = false;
            $scope.lender = true;
          }
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
