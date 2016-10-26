'use strict';

function productDetailsCtrl(ProductDetailsService, LoginService, $routeParams, API_CONFIG) {

    var vm = this;

    vm.productId = $routeParams.productId;
    vm.valuesOption = [1, 2, 3, 4, 5];
    vm.urlImg = API_CONFIG.URL_IMG;
    vm.logout = LoginService.logout;
    vm.userToken = LoginService.isAuthenticated;

    function updateListReviews() {
        ProductDetailsService.reviews.query({productId: vm.productId}).$promise.then(function (result) {
            vm.reviews = result;
        });
    }

    //GET all products
    ProductDetailsService.fetchProducts.query().$promise.then(function (result) {
        vm.products = result;
    });

    //GET all reviews
    ProductDetailsService.reviews.query({productId: vm.productId}).$promise.then(function (result) {
        vm.reviews = result;
    });

    //cleaning review
    vm.newReview = {
        rate: '',
        text: ''
    };

    // add and save review
    vm.addReview = function (_review) {

        if (ProductDetailsService.validationNewReview(_review)) {
            var review = {
                rate: _review.rate,
                text: _review.text
            };

            //save review
            ProductDetailsService.addNewReview({

                rate: review.rate,
                text: review.text,
                productId: vm.productId

            }).then(function () {

                updateListReviews();

            }, function (error) {
                vm.error = error;
                console.log('error', error);
            });

            //cleaning review
            vm.newReview = {
                rate: '',
                text: ''
            }
        } else {
            alert('Fill in all the fields')
        }

    };


}

angular
    .module('productDetails').component('productDetails', {
    templateUrl: 'pages/product-details/product-details.template.html',
    controller: ('ProductDetailsCtrl',
        ['ProductDetailsService', 'LoginService', '$routeParams', 'API_CONFIG', productDetailsCtrl])
});
