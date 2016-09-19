angular.module("sareeApp").controller("homeCtrl", function($scope, mainService, $stateParams) {
  $scope.myInterval = 3000;
  $scope.slides = mainService.homeSlides;
  $scope.signin = true;
  if ($stateParams.userId) $scope.userId = $stateParams.userId;  
})
