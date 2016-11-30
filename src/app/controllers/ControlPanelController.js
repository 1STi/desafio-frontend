(function() {

    angular
        .module('app')
        .controller('ControlPanelController', [
            '$http', '$q', 'citiesService', 'yahooWeatherService',
            ControlPanelController
        ]);

    function ControlPanelController($http, $q, citiesService, yahooWeatherService) {
        var self = this;
        self.leftTemps = [];
        self.rigthTemps = [];
        self.querySearch = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange = searchTextChange;
        self.selectedItem = undefined;
        self.newState = newState;
        var cities = ['Rio de Janeiro', 'São Paulo', 'Belo Horizonte', 'Brasilia', 'Belém', 'Salvador', 'Curitiba', 'Fortaleza', 'Manaus', 'João Pessoa'];

        self.getMapTranslate = function(key){
           return yahooWeatherService.getMapTranslate(key);
        };

        self.getCities = function() {
            return citiesService.getCities();
        };

        self.mphToKm = function(mph) {
            console.log(mph);
            return Math.round(mph * 1.609 * 10) / 10;
        };

        self.getCityBySearch = function(city) {
            if (city) {
                requestYahoo(city).then(function successCallback(data) {
                    self.selectedItem = data.data.results.channel;
                    console.log(self.selectedItem);
                    if (self.leftTemps.length > self.rigthTemps.length) {
                        self.rigthTemps.push(data);
                    } else {
                        self.leftTemps.push(data);
                    }
                }, function errorCallback(reason) {
                    console.log(reason);
                });
            }
        };


        self.initData = function() {
            getLocationsDefault();
        };

        self.toCelsius = function(f) {
            if (f)
                return Math.round((5 / 9) * (f - 32));
        };


        self.simulateQuery = false;
        self.isDisabled = false;
        self.states = loadAll();

        self.getWeatherForWOEID = function() {
            yahooWeatherService.getWeatherForWOEID(self.currentWOEIDData.ResultSet.Results[0].woeid,
                function(data) {
                    console.log("Success : " + data);
                    self.currentWeatherForWoeid = data;
                },
                function(status) {
                    self.currentWeatherForWoeid = null;
                    console.log("Failure : " + status);
                });
        }

        self.lookupWOEIDGeoPosition = function() {
            yahooWeatherService.getWOEID(self.currentGeoPosition,
                function(data) {
                    console.log("Success : " + data);
                    self.currentWOEIDData = data;
                },
                function(status) {
                    self.currentWOEIDData = null;
                    console.log("Failure : " + status);
                });
        }

        function newState(state) {
            alert("Sorry! You'll need to create a Constitution for " + state + " first!");
        }

        function querySearch(query) {
            var results = query ? self.states.filter(createFilterFor(query)) : self.states,
                deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function() { deferred.resolve(results); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {
            console.log('Text changed to ' + text);
        }

        function selectedItemChange(item) {
            console.log('Item changed to ' + JSON.stringify(item));
        }

        function loadAll() {
            var allStates = self.getCities();

            return allStates.split(/, +/g).map(function(state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };

        }

        function requestYahoo(city) {
            var deferred = $q.defer();
            yahooWeatherService.getWeatherByCityName(city).then(function successCallback(data) {
                deferred.resolve(data);
            }, function errorCallback(reason) {
                deferred.reject(reason);
            });

            return deferred.promise;
        }

        function getLocationsDefault() {
            cities.forEach(function(city, index) {
                requestYahoo(city).then(function successCallback(data) {
                    console.log(data);
                    if (index % 2 === 0) {
                        self.leftTemps.push(data);
                    } else {
                        self.rigthTemps.push(data);
                    }
                }, function errorCallback(reason) {
                    console.log(reason);
                });
            });
        }
    }

})();
