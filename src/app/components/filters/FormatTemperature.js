(function() {
    'use strict';

    angular.module('app')
        .filter('formatTemperature', [
            function() {
                return function(input, scale, label) {
                    var value = parseInt(input, 10),
                        convertedValue;

                    // if (isNaN(value)) throw new Error('Input is not a number');

                    if (scale === 'F') {
                        convertedValue = Math.round(value * 9.0 / 5.0 + 32);
                    } else if (scale === 'C') {
                        convertedValue = Math.round((value - 32) * 5.0 / 9.0);
                    } else {
                        throw new Error('Not a valid scale');
                    }

                    return label ? convertedValue += '\u00B0' : convertedValue;
                };
            }
        ]);
})();
