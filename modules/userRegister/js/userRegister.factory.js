(function () {
    'use strict';

    angular
        .module('userRegister.module')
        .factory('userRegister.factory', userRegister);

    userRegister.$inject = ['$http', 'userRegister.constant'];

    function userRegister($http, constant) {
        var service = {
            getDocumentEnabled: getDocumentEnabled
        };

        return service;

        function getDocumentEnabled() {
            return $http.get(constant.endpoint.documentEnabled)
            .success(getDocumentEnabledSuccess)
            .error(getDocumentEnabledError);

            function getDocumentEnabledSuccess(response) {
                return response;
            }

            function getDocumentEnabledError(error) {
                console.log(error);
            }
        }
    }
})();