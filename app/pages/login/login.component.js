'use strict';

function loginCtrl(LoginService, $location) {

    var vm = this;

    vm.login = function (_user){

        LoginService.login(_user).then(function(){

            $location.path('/products')

        }, function(error){
            vm.error = error;
            console.log('error', error);
        })
    };




}

angular
    .module('login').component('login', {
    templateUrl: 'pages/login/login.template.html',
    controller: ('LoginCtrl', ['LoginService', '$location', loginCtrl])
});
