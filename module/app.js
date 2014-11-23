var owerApp = angular.module('logisticApp', [
    "ng-route"
]);

owerApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/index', {
                templateUrl: 'module/index/index.html',
                controller: 'indexCtrl'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }]);