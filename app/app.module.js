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
    .config(config);

  config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes/');
  }
}
