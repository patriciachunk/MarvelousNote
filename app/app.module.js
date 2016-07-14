{
  angular.module('marvelousnote', [
    'ui.router',
    'ngFlash',
    'textAngular',
    'marvelousnote.notes',
    'marvelousnote.notesForm',
    'marvelousnote.signUp',
    'marvelousnote.signIn',
    'marvelousnote.users'
  ])
    .config(config)
    .run(run);

  config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes/');
  }

  run.$inject = ['$rootScope', '$state'];
  function run($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', () => {
      $rootScope.$state = $state;
    });
  }
}
