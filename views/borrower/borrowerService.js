angular.module("sareeApp").service("borrowerService", function($http, $q, mainService) {
  this.slides = borrowerSlides;
  this.saveInventory = function(inventory) {
    this.inventory = inventory;
  }
  this.getOrders = function(userId) {
    return this.user.orders;
  }
  this.placeOrder = function(item, userId, order) {
    var newOrder = {
      borrowerId: userId,
      item: item,
      orderInfo: order
    };
    mainService.placeOrder(item ,userId, newOrder);
  }

});
var borrowerSlides = [
  {
  image: 'images/browse2.png'
},
{
  image: 'images/browse3.png'
},
]
