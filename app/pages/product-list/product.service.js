'use strict';

function productService($resource, API_CONFIG) {
    return $resource(API_CONFIG.URL + 'products/', {}, {});
}

angular
    .module('product.service', [
        'ngResource',
        'api.config'
    ])
    .factory('ProductService', ['$resource', 'API_CONFIG', productService]);