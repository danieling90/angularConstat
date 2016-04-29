(function () {
    'use strict';

    angular
        .module('userRegister.module')
        .controller('userRegister', userRegister);

    userRegister.$inject = ['$scope', 'userRegister.factory', 'userRegister.constant'];

    function userRegister($scope, services, constant) {
        
        var vm = this;

        vm.enabledRegister = false;
        vm.documentEnabled = false;

        vm.defaultModel = {
            name: '',
            email: '',
            numberDocument: '',
            phone: '',
            password: '',
            confirmPassword: '',
            terms_conditions: false
        };

        vm.model = angular.copy(vm.defaultModel);        

        init();

        function init(){
            getDocumentEnabled();
        }

        function getDocumentEnabled() {
            
        }        

        vm.disabledSubmit = function (invalidForm) {
            if (invalidForm == false && vm.model.password != vm.model.confirmPassword) {
                return true;
            } else {
                true;
            }
            return invalidForm;
        };
        
    }
})();
