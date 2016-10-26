'use strict';

function loginService($resource, $http, $q, API_CONFIG) {

    var loginUser = $resource(API_CONFIG.URL + 'login/', {}, {}),
        _isAuthenticated = false,
        _token = null;

    return {
        isAuthenticated: isAuthenticated,
        getToken: getToken,
        login: login,
        logout: logout

    };

    //validation token
    function isAuthenticated() {
        return _isAuthenticated;
    }

    function getToken() {
        return _token;
    }

    //login user
    function login(user) {
        var deferred = $q.defer();

        loginUser.save(user).$promise.then(function (result) {

            if (result && result.token) {

                //send token
                $http.defaults.headers.common["Authorization"] = 'Token ' + result.token;

                _isAuthenticated = true;
                _token = result.token;

                deferred.resolve(result);
            } else {
                deferred.reject({
                    error: 'token does not exists'
                });
            }

        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    //logout user
    function logout() {
        _isAuthenticated = false;
        _token = null;

        //clean token
        $http.defaults.headers.common["Authorization"] = '';
    }

}

angular
    .module('login.service', [
        'ngResource',
        'api.config'
    ])
    .factory('LoginService', ['$resource', '$http', '$q', 'API_CONFIG', loginService]);
