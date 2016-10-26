'use strict';

function signupCtrl(SignupService, $location) {

    var vm = this;

    vm.signUp = function(_user){

        //create new user
        SignupService.addNewUser(_user).then(function(){

            $location.path('/products');

        }, function(error){
            vm.error = error;
            console.log('error', error);
        });
    }


}

angular
    .module('signup').component('signup', {
    templateUrl: 'pages/signup/signup.template.html',
    controller: ('SignupCtrl', ['SignupService', '$location', signupCtrl])
});
