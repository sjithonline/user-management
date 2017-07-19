var app = angular.module('myApp', ["ngRoute", "userModule"]);

app.config(['$routeProvider', '$httpProvider',
    function($routeProvider, $httpProvider) {
        $routeProvider.
                when('/view-users', {
                    templateUrl: 'usermgnt-users.html',
                    action:"viewUsers",
                    controller: 'userMgntCtrl'
                }).
                otherwise({
                    redirectTo: '/view-users'
                });
    }]);


