(function() {
    'use strict';

    angular.module('app')
        .service('yahooWeatherService', ['$log', '$rootScope', '$q', '$http',
            yahooWeatherService
        ]);

    function yahooWeatherService($log, $rootScope, $q, $http) {

        var self = this;

        // var GEOCODE_ENDPOINT = "http://where.yahooapis.com/geocode";

        // var YAHOO_GEO_APP_ID = "zHgnBS4m";
        // var APP_ID = "&appid=" + YAHOO_GEO_APP_ID;
        // var LOCATION = "?location=";
        // var FLAGS = "&flags=J&gflags=R";

        // //http://query.yahooapis.com/v1/public/yql?q=select item from weather.forecast where location="48907"&format=json

        // // Yahoo Weather API vars
        // var FORECAST_ENDPOINT = "http://query.yahooapis.com/v1/public/yql?q=";

        // var FORECAST_YQL_OPEN = "select * from weather.forecast where woeid='";
        // var FORECAST_YQL_CLOSE = "'&format=json";

        // self.getWOEID = function(position, successCallback, failureCallback) {
        //     // This would be so much nicer in coffeescript!
        //     var endPoint = GEOCODE_ENDPOINT + LOCATION + position.latitude + "," + position.longitude + FLAGS + APP_ID;
        //     $log.info("End point = " + endPoint);

        //     $http.get(endPoint)
        //         .success(function(data, status, headers, config) {
        //             successCallback(data);
        //         })
        //         .error(function(data, status, headers, config) {
        //             failureCallback(status);
        //         });
        // }



        // self.getWeatherForWOEID = function(woeid, successCallback, failureCallback) {
        //     var endPoint = FORECAST_ENDPOINT + FORECAST_YQL_OPEN + woeid + FORECAST_YQL_CLOSE;
        //     $log.info("End point = " + endPoint);
        //     $http.get(endPoint)
        //         .success(function(data, status, headers, config) {
        //             successCallback(data);
        //         })
        //         .error(function(data, status, headers, config) {
        //             failureCallback(status);
        //         });
        // }

        self.getWeatherByCityName = function(city, successCallback, failureCallback) {
            var deferred = $q.defer();
            var QUERY = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + ", br')"
            $http.get("https://query.yahooapis.com/v1/public/yql?q= " + QUERY + " &format=json").then(function successCallback(data) {
                if (data.data.query.results) {
                    var object = {};
                    object.city = city;
                    object.data = data.data.query;
                    deferred.resolve(object);
                } else {
                    console.log("Falha na api do yahoo ao buscar as condições climáticas da cidade de " + city);
                }
            }, function errorCallback(reason) {
                deferred.reject(reason);
            });

            return deferred.promise;
        }
    }
})();
