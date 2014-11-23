var ourApp = angular.module('logisticApp', [
    "ngRoute",
    "ngResource"
]);

ourApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'module/index/index.html',
                controller: 'indexCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);