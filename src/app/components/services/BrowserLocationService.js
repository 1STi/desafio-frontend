(function() {
    'use strict';

    angular.module('app')
        .service('browserLocationService', ['$rootScope',
            browserLocationService
        ]);

    function browserLocationService($rootScope) {
        var self = this;

        // self.getLocation = function() {
        //     console.log("Looking up location");
        //     if (navigator.geolocation) {
        //         navigator.geolocation.getCurrentPosition(self.showPosition, self.showError);
        //     } else {
        //         console.log("Geolocation is not supported by this browser.");
        //     }
        // }

        // self.showPosition = function(position) {
        //     console.log("Location Found => Latitude: " + position.coords.latitude + " | Longitude: " + position.coords.longitude);
        //     $rootScope.$broadcast("onBrowserGeoLocationFound", {
        //         latitude: position.coords.latitude,
        //         longitude: position.coords.longitude,
        //         timestamp: new Date(position.timestamp).toLocaleString()
        //     });
        // }

        // self.showError = function(error) {
        //     switch (error.code) {
        //         case error.PERMISSION_DENIED:
        //             $rootScope.$broadcast("onBrowserGeoLocationError", "User denied the request for Geolocation.");
        //             break;
        //         case error.POSITION_UNAVAILABLE:
        //             $rootScope.$broadcast("onBrowserGeoLocationError", "Location information is unavailable.");
        //             break;
        //         case error.TIMEOUT:
        //             $rootScope.$broadcast("onBrowserGeoLocationError", "The request to get user location timed out.");
        //             break;
        //         case error.UNKNOWN_ERROR:
        //             $rootScope.$broadcast("onBrowserGeoLocationError", "An unknown error occurred.");
        //             break;
        //     }
        // }
   
    }
})();
