var ourApp = angular.module('logisticApp', [
    "ngRoute"
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