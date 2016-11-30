(function() {
    'use strict';

    angular.module('app')
        .filter('speedFilter', [
            function() {
                return function(input, scale, label) {
                    var value = parseInt(input, 10),
                        convertedValue;

                    if (scale === 'mph') {
                        convertedValue = Math.round(value * 1.609 * 10) / 10;
                    }

                    return label ? convertedValue += '\u00B0' : convertedValue;
                };
            }
        ]);
})();
