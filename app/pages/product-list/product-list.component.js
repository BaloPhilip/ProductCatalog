'use strict';

function productListCtrl(ProductService, LoginService,  API_CONFIG) {

    var vm = this;
    vm.urlImg = API_CONFIG.URL_IMG;
    vm.logout = LoginService.logout;

    //validation user authenticated
    vm.userToken = LoginService.isAuthenticated;

    //GET all products
    ProductService.query().$promise.then(function (result) {
        vm.products = result;
    });

}

angular.module('productList')
    .component('productList', {
        templateUrl: 'pages/product-list/product-list.template.html',
        controller: ('ProductListCtrl', ['ProductService', 'LoginService', 'API_CONFIG', productListCtrl])
    });
