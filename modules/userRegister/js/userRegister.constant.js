$ServiceAPI = {
    Url: 'http://localhost/api'
};

(function () {
    'use strict';   

    angular
        .module('userRegister.module')
        .constant('userRegister.constant', {
            endpoint: {
                saveUser: '/api/user/register'
            }
        });
})();
