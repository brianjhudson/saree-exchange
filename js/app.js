angular.module("sareeApp", ["ui.router"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/home/homeTempl.html",
                controller: "homeCtrl"

            })
            .state('landing',{
                url:'/landing',
                templateUrl: "../views/landing/landingTempl.html",
                controller: "landingCtrl"
            })
            .state('browse',{
                url:'/browse',
                templateUrl: "../views/borrower/browse.html",
                controller: "borrowerCtrl"
            })
            .state('item_info',{
                url:'/item_info/:item_id',
                templateUrl: "../views/borrower/item_info.html",
                controller: 'borrowerCtrl',
            })
            .state('order',{
                url:'/order/:item_id',
                templateUrl: "../views/borrower/order.html",
                controller: 'borrowerCtrl'
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "../views/locations.html",
                controller: 'locationsCtrl',
                controllerAs: 'vm'
            });

        $urlRouterProvider
            .otherwise('/');
    });
