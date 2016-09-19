angular.module("sareeApp").controller("mainCtrl", function($scope, mainService, $state) {
  mainService.getUsers();
  $scope.test = "Main Control Test Working";
  $scope.createUser = function(user) {
    mainService.createUser(user);
    $scope.userId = mainService.getUserId(user);
    $scope.loggedIn = true;
    $state.go('landing', {userId: $scope.userId})
  }
  $scope.checkLogin = function(userName, password) {
    mainService.checkLogin(user)
  }
})
