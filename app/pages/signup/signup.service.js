'use strict';

function signupService($resource, $q,  API_CONFIG) {
    var register = $resource(API_CONFIG.URL + 'register/', {}, {});

    return {
        register: register,
        addNewUser: addNewUser
    };


    //create new user
    function addNewUser (_user) {
        var deferred = $q.defer();

        register.save(_user).$promise.then(function (result) {
            deferred.resolve(result);

        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }
}

angular
    .module('signup.service', [
        'ngResource',
        'api.config'
    ])
    .factory('SignupService', ['$resource', '$q', 'API_CONFIG', signupService]);
