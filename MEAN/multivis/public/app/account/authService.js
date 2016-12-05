app.factory('authService', ['$http', 'identitySvc', '$q', function($http, identitySvc, $q) {
  return {
      authenticateUser : function(username, password) {
          var def = $q.defer();
          $http.post('/login', {username: username, password:password}).then(function(response) {
              console.log(response);
              if(response.data.success) {
                  identitySvc.currentUser = response.data.user;
                  def.resolve(true);
              } else {
                  def.resolve(false);
              }
          })
          return def.promise;
      }
  }
}])