angular.module("sareeApp").service("mainService", function() {
  this.test = "Main Service Working";
  this.homeSlides =
    [
      {
        image: 'images/banner.png'
      },
      {
        image: 'images/banner3.jpg'
      },
      {
        image: 'images/banner2.png'
      }
    ];

});
