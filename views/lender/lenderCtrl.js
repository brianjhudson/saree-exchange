angular.module("sareeApp").controller("lenderCtrl", function($scope, lenderService, $rootScope) {
  var userId = $rootScope.userId;
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: "../images/banner2.png"
    },
    {
      image: "../images/banner.png"
    },
    {
      image: "../images/banner3.png"
    }


  ]
})
