(function() {
    'use strict';

    angular.module('app')
        .service('yahooWeatherService', ['$log', '$rootScope', '$q', '$http',
            yahooWeatherService
        ]);

    function yahooWeatherService($log, $rootScope, $q, $http) {

        var self = this;

        var mapTranslate = {
            'Sun': 'Domingo',
            'Mon': 'Segunda',
            'Tue': 'Terça',
            'Wed': 'Quarta',
            'Thu': 'Quinta',
            'Fri': 'Sexta',
            'Sat': 'Sábado',
            'Partly Cloud': 'Parcialmente Nublado',
            'Partly Cloudy': 'Nublado',
            'Showers': 'Chuvoso',
            'AM Showers': 'Chuvoso à manhã',
            'PM Showers': 'Chuvoso à noite',
            'PM Thunderstorms': 'Trovoadas à noite',
            'Scattered Thunderstorms': 'Trovoadas dispersas',
            'Light Rain with Thunder': 'Chuva leve, com trovões',
            'Thunderstorms': 'Trovoadas',
            'Heavy Rain': 'Chuva forte',
            'Mostly Sunny': 'Parcialmente ensolarado',
            'Light Rain': 'Chuva leve',
            'Fog': 'Névoa',
            'Fair': 'Sereno',
            'Sunny': 'Ensolarado',
            'AM Rain': 'Chuva à manhã',
            'PM Rain': 'Chuva à noite',
            'Mostly Cloudy': 'Parcialmente Nublado',
            'Isolated Thunderstorms': 'Trovoadas isoladas',
            'Thundershowers': 'Trovoadas',
            'Heavy Thunderstorms': 'Trovoadas fortes',
            'Clear': 'Limpo',
            'Rain': 'Chuva',
            'Cloudy': 'Nublado'
        }

        self.getMapTranslate = function(key){
            return mapTranslate[key];
        };

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
        };
    }
})();
