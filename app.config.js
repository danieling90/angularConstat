(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/userRegister', {
                templateUrl: 'modules/userRegister/views/userRegister.html',
                controller: 'userRegister',
                controllerAs: 'vm'
            });
    }

})();