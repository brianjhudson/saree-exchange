angular.module("sareeApp", ["ui.router", "ui.bootstrap"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/home/homeTempl.html",
                controller: "homeCtrl",
                params: {
                  userId: null
                }
            })
            .state('login',{
                url:'/login',
                templateUrl: "../views/login/login.html",
                controller: "mainCtrl"
            })
            .state('login.signup', {
                url:'/signup',
                templateUrl: "../views/login/signup.html",
                controller: "mainCtrl"
            })

            .state('login.signin', {
                url:'/signin',
                templateUrl: "../views/login/signin.html",
                controller: "mainCtrl"
            })

            .state('landing',{
                url:'/landing',
                templateUrl: "../views/landing/landingTempl.html",
                controller: "landingCtrl",
                params: {
                  userId: null
                }
            })
            .state('browse',{
                url:'/browse',
                templateUrl: "../views/borrower/browse.html",
                controller: "borrowerCtrl",
                params: {
                  userId: null
                }
            })
            .state('browse.borrower_item_info',{
                url:'/borrower_item_info',
                templateUrl: "../views/borrower/item_info.html",
                controller: 'itemInfoCtrl',
                params : {
                  itemId: null,
                  userId: null
                }

            })

            .state('order',{
                url:'/order',
                templateUrl: "../views/borrower/order.html",
                controller: 'orderItemCtrl',
                params: {
                  itemId: null,
                  userId: null
                }
            })

            .state('view_orders',{
                url:'/view_orders',
                templateUrl: "../views/borrower/view_orders.html",
                controller: 'borrowerCtrl',
                params: {
                  userId: null
                }
            })
            .state('inventory',{
                url:'/inventory',
                templateUrl: "../views/lender/inventory.html",
                controller: 'lenderCtrl',
                params: {
                  userId: null
                }
            })
            .state('add_item',{
                url:'/add_item',
                templateUrl: "../views/lender/add_item.html",
                controller: 'lenderCtrl',
                params: {
                  userId: null
                }
            })
            .state('lender_item_info',{
                url:'/lender_item_info',
                templateUrl: "../views/lender/item_info.html",
                controller: 'lenderCtrl',
                params: {
                  itemId: null,
                  userId: null
                }
            })
            .state('ship_item',{
                url:'/ship_item',
                templateUrl: "../views/lender/ship_item.html",
                controller: 'lenderCtrl',
                params: {
                  itemId: null,
                  userId: null
                }
            })
            .state('view_requests',{
                url:'/view_requests',
                templateUrl: "../views/lender/view_requests.html",
                controller: 'lenderCtrl',
                params: {
                  userId: null
                }
            });
        $urlRouterProvider
            .otherwise('/');
    });
