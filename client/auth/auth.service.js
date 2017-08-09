'use strict';

angular.module("startUpApp")
  .factory('AuthService', AuthService)

AuthService.$inject = ['$auth', '$state', 'usersService'];

function AuthService($auth, $state, usersService) {

  var auth = {
    login: login,
    logout: logout,
    isAdmin: isAdmin,
    isAuthenticated: isAuthenticated,
    isTrab: isTrab,
    isFerr: isFerr,
    userInfo:userInfo,
    getRoles: getRoles

  }

  function login(user, callback) {
    $auth.login(user)
      .then(response => {
        console.log("login ok", response);
        $state.go('main');
      }).catch(err => {
        var error = err;
        alert(error.data);
        console.log("Error de login", err);
        $state.go('login');

      })

  }

  function logout() {

    return $auth.logout()
      .then(response => {
        console.log("logout ok", response);
        console.log(auth.isAdmin());
        $state.go('main');
      }).catch(err => {
        var error = err;
        alert(error.data);
        console.log("Error de logout", err);
        $state.go('login');

      })

  }

  function isAuthenticated() {

    if ($auth.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }

  function userInfo() {

    if (auth.isAuthenticated()) {
      return $auth.getPayload().user;
    } else{
      return false;
    }
  }

  function isAdmin() {

    if ($auth.isAuthenticated()) {
      if ($auth.getPayload().roles.indexOf("ADMIN") !== -1) {

        return true;
      } else {
        return false;
      }
    }
  }

  function isTrab() {

    if ($auth.isAuthenticated()) {
      if ($auth.getPayload().roles.indexOf("TRAB") !== -1) {

        return true;
      } else {
        return false;
      }
    }
  }

  function isFerr() {

    if ($auth.isAuthenticated()) {
      if ($auth.getPayload().roles.indexOf("FERR") !== -1) {

        return true;
      } else {
        return false;
      }
    }
  }

  function getRoles(){
		if(auth.isAuthenticated()){
			return $auth.getPayload().roles;
		} else{
			return false;
		}
	}

  return auth;
}
