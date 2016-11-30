'use strict';

angular.module('angularMaterialAdmin', ['ngAnimate', 'ngCookies', 'ngTouch',
    'ngSanitize', 'ui.router', 'ngMaterial', 'nvd3', 'app'
])

.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider,
    $mdIconProvider) {
    $stateProvider
        .state('home', {
            url: '',
            templateUrl: 'app/views/main.html',
            abstract: true
        })
        .state('home.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/views/dashboard.html',
            controller: 'ControlPanelController',
            controllerAs: 'vm',
            data: {
                title: 'Dashboard'
            }
        });

    $urlRouterProvider.otherwise('/dashboard');

});
