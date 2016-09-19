angular.module("sareeApp").controller("mainCtrl", function($scope, mainService, $state) {
  // mainService.getUsers();
  $scope.test = "Main Control Test Working";
  $scope.createUser = function(user) {
    mainService.createUser(user);
    $scope.loggedIn = true;
    $scope.userId = mainService.userId;
    $state.go('home', {userId: $scope.userId})
  }
  $scope.checkLogin = function(userName, password) {
    mainService.checkLogin(user)
  }
})
