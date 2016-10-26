'use strict';

angular
    .module('product')
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/products', {
                    template: '<product-list></product-list>'
                })
                .when('/product/:productId', {
                    template: '<product-details></product-details>'
                })
                .when('/signup', {
                    template: '<signup></signup>'
                })
                .when('/login', {
                    template: '<login></login>'
                })
                .otherwise('/products');
        }
    ]);
