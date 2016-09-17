angular.module("sareeApp").controller("homeCtrl", function($scope, mainService) {
  $scope.myInterval = 3000;
  $scope.slides = mainService.homeSlides;
})
