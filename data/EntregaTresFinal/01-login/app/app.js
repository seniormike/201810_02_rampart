(function () {

  'use strict';

  angular
    .module('app', ['auth0.auth0', 'ui.router'])
    .config(config);

  config.$inject = [
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider',
    'angularAuth0Provider'
  ];

  function config(
    $stateProvider,
    $locationProvider,
    $urlRouterProvider,
    angularAuth0Provider
  ) {

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeController',
        templateUrl: 'app/home/home.html',
        controllerAs: 'vm'
      })
      .state('callback', {
        url: '/callback',
        controller: 'CallbackController',
        templateUrl: 'app/callback/callback.html',
        controllerAs: 'vm'
      });;

    // Initialization for the angular-auth0 library
    angularAuth0Provider.init({
      clientID: 'okm2ylvZRo5RWq2vauicdBae9no0qGUZ',
      domain: 'isis2503-dasolano1.auth0.com',
      responseType: 'token id_token',
      audience: 'https://' + 'isis2503-dasolano1.auth0.com' + '/userinfo',
      redirectUri: 'http://localhost:3000/callback',
      scope: 'openid'
    });
    

    $urlRouterProvider.otherwise('/');

    $locationProvider.hashPrefix('');

    /// Comment out the line below to run the app
    // without HTML5 mode (will use hashes in routes)
    $locationProvider.html5Mode(true);
  }

})();
