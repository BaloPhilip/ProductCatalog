'use strict';

angular
    .module('api.config', [])
    .constant('API_CONFIG', {
        URL: 'http://smktesting.herokuapp.com/api/',
        URL_IMG: 'http://smktesting.herokuapp.com/static/'
    });