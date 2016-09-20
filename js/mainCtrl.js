angular.module("sareeApp").controller("mainCtrl", function($scope, mainService, $state) {
  function init() {
    mainService.getUsers().then(function(result){
      mainService.saveUsers(result);
    });
    mainService.getInventory().then(function(result){
      mainService.saveInventory(result);
    })
    $scope.loggedIn = false;
    $scope.createUser = createUser;
    $scope.checkLogin = checkLogin;
  }

  function createUser(user) {
    mainService.createUser(user);
    $scope.loggedIn = true;
    $scope.userId = mainService.userId;
    $state.go('home')
  }
  function checkLogin(userName, password) {
    console.log(userName, password);
    if (mainService.checkLogin(userName, password)) {
      $scope.loggedIn = true;
      $state.go('home');
    }
    else {
      alert("Incorrect login. Please try again.");
    }
  }

  init();
})
