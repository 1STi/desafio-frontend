(function() {
    'use strict';

    angular.module('app')
        .service('navService', [
            '$q',
            navService
        ]);

    function navService($q) {
        var menuItems = [{
            name: 'Dashboard',
            icon: 'dashboard',
            sref: '.dashboard'
        }];

        return {
            loadAllItems: function() {
                return $q.when(menuItems);
            }
        };
    }

})();
