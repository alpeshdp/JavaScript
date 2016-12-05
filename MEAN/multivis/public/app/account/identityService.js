app.factory('identitySvc', function() {
    return {
        currentUser : undefined,
        isAuthenticated : function() {
            return !!this.currentUser;
        }
    }
})