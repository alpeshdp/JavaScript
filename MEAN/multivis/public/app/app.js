var app = angular.module('MultiVisApp', [
    'ngResource',
    'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider.when('/', {
        templateUrl : '/partials/main/main',
        controller : 'MainController'
    })
});


