angular.module("sareeApp").service("mainService", function($http) {
  this.test = "Main Service Working";
  this.getInventory = function() {
    return $http.get("js/siteInventory.json").then(function(result) {
      return result.data;
    })
  }
  this.homeSlides = slides;
});

var slides = [
  {
    image: 'images/banner2.png'
  },
  {
    image: 'images/banner3.jpg'
  },
  {
    image: 'images/banner.png'
  }
];
