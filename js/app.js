angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('adventurers', {
                url: '/adventurers',
                // parent: 'home',
                templateUrl: '../views/about-adventurers.html'
            })
            .state('contact', {
                url: '/contact',
                // parent: 'home',
                templateUrl: '../views/contact.html'
            })
            .state('allPackages', {
                url: '/allPackages',
                templateUrl: '../views/packagesAll.html',
                controller: 'packagesAllCtrl'
            })
            .state('packagesCountry', {
                url: '/packages/:country',
                templateUrl: '../views/packagesCountry.html',
                controller: 'packagesCtrl'
            })
            .state('booked', {
                url: '/booked/:id',
                templateUrl: '../views/booked.html',
                controller: 'bookedCtrl'
            })
            .state('locations', {
                url: '/locations',
                templateUrl: "../views/locations.html",
                controller: 'locationsCtrl'
            })

        $urlRouterProvider
            .otherwise('/');
    });
