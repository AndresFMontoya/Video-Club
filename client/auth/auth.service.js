'use strict';

angular.module("startUpApp")
  .factory('AuthService', AuthService)

AuthService.$inject = ['$auth', '$state'];
function AuthService($auth, $state) {

  var auth = {
    login: login,
    logout: logout,
    isAdmin: isAdmin

  }

  function login(user, callback) {
    $auth.login(user)
      .then(response => {
        console.log("login ok",response);
        $state.go('main');
      }).catch(err => {
        var error=err;
        alert(error.data);
        console.log("Error de login",err);
        $state.go('login');

      })

  }

  function logout() {

  }

  function isAdmin() {

  }
  return auth;
}
