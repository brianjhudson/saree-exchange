angular.module("sareeApp").service("borrowerService", function($http, $q) {
  this.slides = borrowerSlides;
  this.saveInventory = function(inventory) {
    this.inventory = inventory;
  }
  this.getUser = function(userId) {
    var deferred = $q.defer();
    if (this.viewedItems) {
      deferred.resolve(this.viewedItems);
    }
    else if (localStorage[user]) {
      deferred.resolve(JSON.parse(localStorage[user]))
    }
    // Insert logic for server request here
    // else {
    //   return $http.get('url').then(function(result) {
    //     deferred.resolve(result.data);
    //   });
    // }
    else {
      deferred.resolve(null);
    }
    return defer.promise;
  }
  this.getViewedItems = function(userId) {
    return this.user.viewedItems;
  }
  this.getOrders = function(userId) {
    return this.user.orders;
  }
  this.placeOrder = function(item, userId, order) {
    order[customer] = this.user.name;
    order[item] = item;
    // removeItemFromInventory(item);
    // addToUsersOrder(item, userId, order);
    // addToLendersRequests(order)
    // lenderService.placeOrder(order);

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
