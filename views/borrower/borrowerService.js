
angular.module("sareeApp").service("borrowerService", function($http, $q) {
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

});
