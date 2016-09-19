angular.module("sareeApp").service("mainService", function($http) {

  this.getInventory = function() {
    return $http.get("js/siteInventory.json").then(function(result) {
      return result.data;
    })
  }
  this.homeSlides = slides;

  this.getUsers = function() {
    if (localStorage[users]) {
      this.users = JSON.parse(localStorage[users]);
    }
    else this.users = [];
  }
  this.createUser = function(user) {
    this.users.push(user);

  }
});

var slides = [
  {
    index: 0,
    image: 'images/banner2.png'
  },
  {
    index: 1,
    image: 'images/banner3.jpg'
  },
  {
    index: 2,
    image: 'images/banner.png'
  }
];
