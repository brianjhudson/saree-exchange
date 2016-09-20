angular.module("sareeApp").service("mainService", function($http, $rootScope, $q) {
  this.userId = $rootScope.userId;
  this.homeSlides = slides;
  this.getUsers = getUsers;
  this.saveUsers = saveUsers;
  this.getInventory = getInventory;
  this.saveInventory = saveInventory;
  this.getOrders = getOrders;
  this.createUser = createUser;
  this.placeOrder = placeOrder;
  this.borrowerSlides = borrowerSlides;
  this.checkLogin = checkLogin;
  this.generateLenderInventory = generateLenderInventory;

  function getUsers() {
    // var deferred = $q.defer();
    // if (localStorage["usersExist"]) {
    //   console.log("hello")
    //   deferred.resolve(JSON.parse(localStorage["users"]));
    // }
    // else {
      return $http.get("js/users.json").then(function(result) {
        return result.data;
        // deferred.resolve(result.data);
      })
    // }
    // return deferred.promise;
  }

  function saveUsers(users) {
    this.users = users;
    localStorage["users"] = JSON.stringify(this.users);
    localStorage["usersExist"] = "true";
  }

  function getInventory() {
    // var deferred = $q.defer();
    // if (localStorage["inventoryExists"]) {
    //   deferred.resolve(JSON.parse(localStorage["inventory"]));
    // }
    // else {
      return $http.get("js/siteInventory.json").then(function(result) {
        return result.data;
        // deferred.resolve(result.data);
      })
    // }
    // return deferred.promise;
  }

  function saveInventory(inventory) {
    this.inventory = inventory;
    localStorage["inventory"] = JSON.stringify(this.inventory);
    localStorage["inventoryExists"] = "true";
  }

  function getOrders() {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id == this.userId) {
        console.log(this.users[i].orders);
        return this.users[i].orders;
      }
    }
  }

  function createUser(user) {
    var newUser = {
      id: this.users.length + 1
      , firstName: user.firstName
      , lastName: user.lastName
      , email: user.email
      , username: user.userName
      , password: user.password
      , orders: []
    };
    this.users.push(newUser);
    this.saveUsers(this.users);
    $rootScope.userId = newUser.id;
    this.userId = $rootScope.userId;
  }

  function checkLogin(username, password) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].username === username && this.users[i].password === password) {
        $rootScope.userId = this.users[i].id;
        this.userId = $rootScope.userId;
        return true;
      }
    }
  }
  function placeOrder (item, order) {
    var orderDate = new Date();
    var newOrder = {
      borrowerId: this.userId,
      item: item,
      orderInfo: order,
      orderDate: orderDate
    };
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id == this.userId) {
        this.users[i].orders.push(newOrder);
      }
    }
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

var borrowerSlides = [
  {
  image: 'images/browse2.png'
},
{
  image: 'images/browse3.png'
},
]
