'use strict';

function productDetailsService($resource, $q, API_CONFIG) {

    var fetchProducts = $resource(API_CONFIG.URL + 'products/', {}, {});

    var reviews = $resource(API_CONFIG.URL + 'reviews/:productId', {
        productId: '@productId'
    }, {});
    

    return {
        fetchProducts: fetchProducts,
        reviews: reviews,
        validationNewReview: validationNewReview,
        addNewReview: addNewReview
    };

    //validation review
    function validationNewReview(_review){

        if(_review.text != '' && _review.rate !== ''){
            return true
        } else {
            return false
        }

    }

    //save new review
    function addNewReview(_reviews) {
        var deferred = $q.defer();

        reviews.save(_reviews).$promise.then(function (result) {

            deferred.resolve(result);

        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

}

angular
    .module('productDetails.service', [
        'ngResource',
        'api.config'
    ])
    .factory('ProductDetailsService', ['$resource', '$q', 'API_CONFIG', productDetailsService]);