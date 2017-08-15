'use strict';

angular.module("startUpApp")
  .factory('AuthService', AuthService)

AuthService.$inject = ['$auth', '$state', 'usersService','localStorageService'];

function AuthService($auth, $state, usersService,localStorageService) {
  var avatar;
  var auth = {
    login: login,
    logout: logout,
    isAdmin: isAdmin,
    getImageProfile: getImageProfile,
    isAuthenticated: isAuthenticated,
    isTrab: isTrab,
    isFerr: isFerr,
    userInfo:userInfo,
    getRoles: getRoles,
    getActive: getActive

  }

  function login(user,recordar, callback) {
    if (recordar) {
      $auth.setStorageType('localStorage');
      localStorageService.setStorageType('localStorage');
    } else {
      $auth.setStorageType('sessionStorage');
      localStorageService.setStorageType('sessionStorage');
    }
    $auth.login(user)
      .then(response => {
          $('#myModal').modal('toggle')
        console.log("login ok", response);
        usersService.get({id:$auth.getPayload().sub}).$promise
        .then(response =>{
          console.log();

          if (typeof response.imageProfile !== "undefined") {
            localStorageService.set('avatar', response.imageType + ','+ response.imageProfile);
            console.log("user",response);

          }


        })
        $state.go('main');
      }).catch(err => {
        var error = err;
        alert(error.data);
        console.log("Error de login", err);
        $state.go('login');

      })

  }
function getImageProfile() {
  if($auth.isAuthenticated()){
    return localStorageService.get('avatar');
  }else {
    return false;
  }
}

  function logout() {

    return $auth.logout()
      .then(response => {
        console.log("logout ok", response);
        console.log(auth.isAdmin());
        $state.go('main');
        localStorageService.remove('avatar')
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
  function getActive() {
    if (auth.isAuthenticated()) {
      if ($auth.getPayload().active== 'true') {
        return true;
      } else {
          return false;
      }

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
