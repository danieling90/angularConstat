(function () {
    'use strict';

    angular
        .module('app')
        .directive('validateLargeEmail', validateLargeEmail);

    function validateLargeEmail() {
        var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        var directive = {
            require: 'ngModel',
            link: link,
            scope: {
                max: '='
            }
        };
        return directive;

        function link(scope, element, attrs, ctrl) {
            ctrl.$validators.validateLargeEmail = function (modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }

                if (!expr.test(viewValue)) {
                    // it is valid
                    return false;
                }

                // it is invalid
                return true;
            };
        }
    }

})();