angular.module("sareeApp").service("mainService", function($http) {
  this.users = [];
  this.orders = [];
  this.userId = null;
  this.getInventory = function() {
    return $http.get("js/siteInventory.json").then(function(result) {
      return result.data;
    })
  }
  this.homeSlides = slides;
  // this.getUsers = function() {
  //   if (localStorage[users]) {
  //     this.users = JSON.parse(localStorage[users]);
  //   }
  //   else this.users = [];
  // }
  this.createUser = function(user) {
    var newUser = {
      id: this.users.length
      , name: user.name
      , email: user.email
      , username: user.userName
      , password: user.password
      , orders: []
    };
    this.users.push(newUser);
    localStorage[users] = JSON.stringify(this.users);
    this.userId = newUser.id;
  }
  this.placeOrder = function(item, userId, order) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id == userId) {
        this.users[i].orders.push(order);
      }
    }
  }
  this.getOrders = function(userId) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id == userId) {
        return this.users[i].orders;
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
var users = [
  {
    id: 0
    , name: "Brian Hudson"
    , email: "brianh@gmail.com"
    , username: "bj"
    , password: "hello"
  },
  {
    id: 1
    , name: "Kavita S Joshi"
    , email: "ksj@123.com"
    , username: "kj"
    , password: "bye"
  }
]
