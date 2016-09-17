angular.module("sareeApp").controller("homeCtrl", function($scope, mainService) {
  $scope.test = "Home Control Is Working";
  $scope.myInterval = 3000;
  $scope.slides = mainService.homeSlides;  
})
