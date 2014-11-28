var ourApp = angular.module('logisticApp', [
    "ngRoute",
    "ngResource",
    "pascalprecht.translate"
]);

ourApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/index/index.html',
                controller: 'indexCtrl'
            })
            .when('/request', {
                templateUrl: 'partials/request-list/request-list.html',
                controller: 'requestCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);