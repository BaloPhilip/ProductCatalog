angular.module('product', [
    'ngRoute',
    'ngResource',
    'productList',
    'productDetails',
    'signup',
    'login',
    'api.config'
])
.config(['$resourceProvider', function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);