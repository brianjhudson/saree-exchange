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
            .state('borrower_item_info',{
                url:'/borrower_item_info/:item_id',
                templateUrl: "../views/borrower/item_info.html",
                controller: 'borrowerCtrl',
            })
            .state('order',{
                url:'/order/:item_id',
                templateUrl: "../views/borrower/order.html",
                controller: 'borrowerCtrl'
            })
            .state('view_orders',{
                url:'/view_orders',
                templateUrl: "../views/borrower/view_orders.html",
                controller: 'borrowerCtrl'
            })
            .state('inventory',{
                url:'/inventory',
                templateUrl: "../views/lender/inventory.html",
                controller: 'lenderCtrl'
            })
            .state('add_item',{
                url:'/add_item',
                templateUrl: "../views/lender/add_item.html",
                controller: 'lenderCtrl'
            })
            .state('lender_item_info',{
                url:'/lender_item_info',
                templateUrl: "../views/lender/item_info.html",
                controller: 'lenderCtrl'
            })
            .state('ship_item',{
                url:'/ship_item',
                templateUrl: "../views/lender/ship_item.html",
                controller: 'lenderCtrl'
            })
            .state('view_requests',{
                url:'/view_requests',
                templateUrl: "../views/lender/view_requests.html",
                controller: 'lenderCtrl'
            });
        $urlRouterProvider
            .otherwise('/');
    });
