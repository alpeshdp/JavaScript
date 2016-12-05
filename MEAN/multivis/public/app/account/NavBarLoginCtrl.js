app.controller('NavBarLoginController', ['$scope', 'authService', 'notifierSvc', 'identitySvc', function($scope, authService, notifierSvc, identitySvc) {

    $scope.identitySvc = identitySvc;
    $scope.signIn = function(username, password) {
        authService.authenticateUser(username, password).then(function(response) {
            console.log(response);
            if(response) {
                notifierSvc.notify('You have successfully signed in!')
            } else {
                notifierSvc.notify('Login failed.');
            }
        })
    };
}])



