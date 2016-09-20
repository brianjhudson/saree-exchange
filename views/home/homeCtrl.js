angular.module("sareeApp").controller("homeCtrl", function($scope, mainService, $stateParams, $rootScope) {
  $scope.myInterval = 3000;
  $scope.slides = mainService.homeSlides;
  $scope.userId = mainService.userId;
})
