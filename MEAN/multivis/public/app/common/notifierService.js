app.factory('notifierSvc', ['toaster', function(toaster) {
    return {
        notify : function(msg) {
            toaster.success(msg);
        }
    }
}]);