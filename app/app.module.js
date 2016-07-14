{
  angular.module('marvelousnote', [
    'ui.router',
    'ngFlash',
    'textAngular',
    'ng.httpLoader',
    'marvelousnote.notes',
    'marvelousnote.notesForm',
    'marvelousnote.signUp',
    'marvelousnote.signIn',
    'marvelousnote.users'
  ])
    .config(config)
    .run(run);

  config.$inject = ['$urlRouterProvider', 'httpMethodInterceptorProvider'];
  function config($urlRouterProvider, httpMethodInterceptorProvider) {
    $urlRouterProvider.otherwise('/notes/');
    httpMethodInterceptorProvider.whitelistDomain('localhost');
  }

  run.$inject = ['$rootScope', '$state'];
  function run($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', () => {
      $rootScope.$state = $state;
    });
  }
}
